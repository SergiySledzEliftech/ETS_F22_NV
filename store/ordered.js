import { serverApiUrl } from '@/settings/config';

export const state = () => ({
  orderedGoods: [],
  orderedGoodsInfo: []
});

export const mutations = {
  setOrderedGoods (state, goods) {
    state.orderedGoods = goods;
  },

  setOrderedGoodsInfo (state, goodsInfo) {
    state.orderedGoodsInfo = goodsInfo;
  },

  setItemStatus (state, item) {
    item.status = 'available';
  },

  pushGoodToList (state, good) {
    state.orderedGoods.push(good);
  },

  pushOrderedGoodsInfo (state, goodInfo) {
    state.orderedGoodsInfo.push(goodInfo);
  },

  Delete_Ordered_Good (state, id) {
    const index = state.orderedGoods.findIndex(item => item._id === id);
    state.orderedGoods.splice(index, 1);
  },

  removeGoodFromList (state, goodId) {
    const index = state.orderedGoods.findIndex(item => item.goodId === goodId);
    state.orderedGoods.splice(index, 1);
    state.orderedGoodsInfo.splice(index, 1);
  }

};

export const actions = {
  async getUserOrders ({ state, commit }, userId) {
    const { data } = await this.$axios.get(
      `${serverApiUrl}orders?userId=${userId}`
    );
    commit('setOrderedGoods', data.goods);
  },

  async getOrderedGoodsInfo ({ state, commit }) {
    for (const item of state.orderedGoods) {
      const { data } = await this.$axios.get(`${serverApiUrl}products/${item.goodId}`);
      commit('pushOrderedGoodsInfo', data);
    }
  },

  async addGoodToOrderList ({ state, commit }, { userId, good }) {
    // get list of goods
    const { data } = await this.$axios.get(
      `${serverApiUrl}orders?userId=${userId}`
    );
    commit('setOrderedGoods', data.goods);
    if (state.orderedGoods) {
      // push to end good and update all list
      commit('pushGoodToList', good);
      await this.$axios.$put(
        `${serverApiUrl}orders?userId=${userId}`,
        {
          goods: state.orderedGoods
        }
      );
    } else {
      // create new orders list and add good
      await this.$axios.$post(
        `${serverApiUrl}orders`,
        {
          userId,
          goods: [
            good
          ]
        });
    }
  },

  async removeOrdersList ({ state, commit }, { userId, goods }) {
    // update status of all goods in orders list
    for (const good of goods) {
      await this.$axios.$put(`${serverApiUrl}products/${good.goodId}`, {
        status: 'available'
      });
    }
    // delete orders list
    await this.$axios.$delete(`${serverApiUrl}orders?userId=${userId}`);
  },

  async removeGood ({ state, commit }, { userId, goodId }) {
    // // remove good from list
    commit('removeGoodFromList', goodId);
    // update orders list
    await this.$axios.$put(
      `${serverApiUrl}orders?userId=${userId}`, {
        goods: state.orderedGoods
      }
    );
    // update good's status
    await this.$axios.$put(`${serverApiUrl}products/${goodId}`, {
      status: 'available'
    });
  }
};

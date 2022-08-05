import { serverApiUrl } from '@/settings/config';

export const state = () => ({
  orderedGoods: []
});

export const mutations = {
  setOrderedGoods (state, goods) {
    state.orderedGoods = goods;
  },

  Delete_Ordered_Good (state, id) {
    const index = state.orderedGoods.findIndex(item => item._id === id);
    state.orderedGoods.splice(index, 1);
  },

  setItemStatus (state, item) {
    item.status = 'available';
    console.log(item, 'nskfjhskfjshdfkj');
  }
};

export const actions = {
  async deleteOrderedGood ({ commit }, { id, item }) {
    commit('setItemStatus', item);
    await this.$axios.$put(`${serverApiUrl} + item._id, item`);
    const newData = this.$auth.$storage.getLocalStorage(this.$auth.user._id);
    newData.forEach((el) => {
      if (el.good._id === id) {
        const index = newData.findIndex(item => item.good._id === id);
        newData.splice(index, 1);
        this.$auth.$storage.removeLocalStorage(this.$auth.user._id);
        this.$auth.$storage.setLocalStorage(this.$auth.user._id, newData);
      };
    });
    commit('Delete_Ordered_Good', id);
  }
};

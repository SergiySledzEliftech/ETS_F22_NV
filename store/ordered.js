export const state = () => ({
  orderedGoods: []
});

export const mutations = {
  setOrderedGoods (state, goods) {
    const orderGoods = [];
    goods.forEach((item) => {
      orderGoods.push(item.good);
    });
    state.orderedGoods = orderGoods;
  },

  Delete_Ordered_Good (state, id) {
    const index = state.orderedGoods.findIndex(item => item.id === id);
    state.orderedGoods.splice(index, 1);
    console.log(state.orderedGoods);
  }
};

export const actions = {
  deleteOrderedGood ({ commit }, id) {
    commit('Delete_Ordered_Good', id);
  }
};

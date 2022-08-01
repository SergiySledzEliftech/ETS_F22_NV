export const state = () => ({
  orderedGoods: []
});

export const mutations = {
  setOrderedGoods (state, goods) {
    // const orderGoods = [];
    // goods.forEach((item) => {
    //   orderGoods.push(item.good);
    // });
    state.orderedGoods = goods;
    console.log(state.orderedGoods, 111111);
  },

  Delete_Ordered_Good (state, id) {
    console.log(id, '((((((((((((');
    const index = state.orderedGoods.findIndex(item => item.id === id);
    state.orderedGoods.splice(index, 1);
    console.log(state.orderedGoods, '--------------');
  },

  setItemStatus (state, item) {
    item.status = 'available';
  }
};

export const actions = {
  async deleteOrderedGood ({ commit }, { id, item }) {
    commit('setItemStatus', item);
    console.log(id, 'ggggggg');
    console.log(item, 'wwwwwwwwwwwww');
    await this.$axios.$put('http://localhost:3001/products/' + item._id, item);
    console.log(this.$auth.$storage.getLocalStorage(this.$auth.user._id), 777777777);
    // this.$auth.$storage.getLocalStorage(this.$auth.user._id).forEach((item) => {
    //   if (item.lease_term === 10) {
    //     console.log('nfkjdsfbsjbsdj');
    //     const ar = this.$auth.$storage.getLocalStorage(this.$auth.user._id).findIndex(element => element.good._id === id);
    //     console.log(ar, 3333333);
    //   };
    // });
    console.log(id);
    commit('Delete_Ordered_Good', id);
  }
};

export const state = () => ({
  good: {},
  rentedGoods: [],
  loading: true
});

export const mutations = {
  setLoading (state, loading) {
    state.loading = loading;
  },
  setGood (state, good) {
    state.good = good;
  },
  setGoodStatus (state, status) {
    state.status = status;
  }
};

export const actions = {
  async loadGood ({ state, commit }, id) {
    commit('setLoading', true);
    const { data } = await this.$axios.get('http://localhost:3001/products/' + id);
    commit('setGood', data);
    commit('setLoading', false);
  },
  setLoading ({ state, commit }, loading) {
    commit('setLoading', loading);
  },
  async updateGood ({ state, commit }, good) {
    await this.$axios.$put('http://localhost:3001/products/' + good._id, good);
  }
};

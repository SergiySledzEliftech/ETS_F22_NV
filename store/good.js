export const state = () => ({
  good: {},
  loading: true
});

export const mutations = {
  setLoading (state, loading) {
    state.loading = loading;
  },
  setGood (state, good) {
    state.good = good;
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
  }
};

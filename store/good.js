export const state = () => ({
  good: {},
  rentedGoods: [],
  recommendations: [],
  loading: false
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
  },
  setRecommendations (state, recommendations) {
    state.recommendations = recommendations;
  }
};

export const actions = {
  async loadGood ({ state, commit }, id) {
    commit('setLoading', true);
    const { data } = await this.$axios.get('http://localhost:3001/products/' + id);
    commit('setGood', data);
    commit('setLoading', false);
  },
  async updateGood ({ state, commit }, good) {
    await this.$axios.$put('http://localhost:3001/products/' + good._id, good);
  },
  async loadRecommendations ({ state, commit }, params) {
    console.log(params);
    const { data } = await this.$axios.get(
      'http://localhost:3001/products/' + params.id + '/rec?' +
      'category=' + params.category + '&' +
      'min=' + params.min + '&' +
      'max=' + params.max + '&' +
      'status=' + params.status + '&' +
      'rating=' + params.rating
    );
    commit('setRecommendations', data);
  }
}
;

import { serverApiUrl } from '@/settings/config';

export const state = () => ({
  good: {},
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
    state.good.status = status;
  },
  setRecommendations (state, recommendations) {
    state.recommendations = recommendations;
  }
};

export const actions = {
  async loadGood ({ state, commit }, id) {
    commit('setLoading', true);
    const { data } = await this.$axios.get(`${serverApiUrl}products/${id}`);
    commit('setGood', data);
    commit('setLoading', false);
  },
  async updateGood ({ state, commit }, good) {
    await this.$axios.$put(`${serverApiUrl}products/${good._id}`, good);
  },
  async loadRecommendations ({ state, commit }, params) {
    const { data } = await this.$axios.get(
      `${serverApiUrl}products/${params.id}/rec?` +
      `category=${params.category}&` +
      `min=${params.min}&` +
      `max=${params.max}&` +
      `status=${params.status}&` +
      `minRating=${params.minRating}`);
    commit('setRecommendations', data);
  },
  async updateStatistic () {
    await this.$axios.$put(`${serverApiUrl}statistics/itemsRented`);
  }
}
;

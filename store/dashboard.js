import { serverApiUrl } from '@/settings/config';

export const state = () => ({
  top10: [],
  news: [],
  partners: [],
  statistics: [],
  premium: [],
  loading: true
});

export const mutations = {
  setLoading (state, loading) {
    state.loading = loading;
  },
  setTop10 (state, top10) {
    state.top10 = top10;
  },
  setNews (state, news) {
    state.news = news;
  },
  setPartners (state, partners) {
    state.partners = partners;
  },
  setStatistics (state, statistics) {
    state.statistics = statistics;
  },
  setPremium (state, premium) {
    state.premium = premium;
  }
};

export const actions = {
  async loadTop10 ({ state, commit }) {
    commit('setLoading', true);
    const { data } = await this.$axios.get(`${serverApiUrl}top10`);
    commit('setTop10', data);
    commit('setLoading', false);
  },
  async loadStatistics ({ state, commit }) {
    commit('setLoading', true);
    const { data } = await this.$axios.get(`${serverApiUrl}statistics`);
    commit('setStatistics', data);
    commit('setLoading', false);
  },
  async loadPremium ({ state, commit }) {
    commit('setLoading', true);
    const { data } = await this.$axios.get(`${serverApiUrl}premium`);
    commit('setPremium', data);
    commit('setLoading', false);
  },
  async loadPartners ({ state, commit }) {
    commit('setLoading', true);
    const { data } = await this.$axios.get(`${serverApiUrl}partners`);
    commit('setPartners', data);
    commit('setLoading', false);
  },
  async loadNews ({ state, commit }) {
    commit('setLoading', true);
    const { data } = await this.$axios.get(`${serverApiUrl}news`);
    commit('setNews', data);
    commit('setLoading', false);
  },
  async updateUsersEnteredStatistics ({ state, commit }) {
    await this.$axios.put(`${serverApiUrl}statistics/update-users`);
  },
  setLoading ({ state, commit }, loading) {
    commit('setLoading', loading);
  }
};

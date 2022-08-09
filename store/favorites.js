import { serverApiUrl } from '~/settings/config';

export const state = () => ({
  data: [],
  isFav: []
});

export const actions = {
  async getFavorites ({ commit }, id) {
    try {
      const res = await this.$axios.$get(`${serverApiUrl}favorites?user=${String(id)}`);
      commit('setData', res);
    } catch (error) {
      console.log(error.message);
    }
  },

  async addToFavorites ({ commit }, item) {
    try {
      await this.$axios.post(`${serverApiUrl}favorites`, item);
    } catch (error) {
      console.log(error.message);
    }
  },

  async removeFromFavorites ({ commit }, id) {
    try {
      await this.$axios.$delete(`${serverApiUrl}favorites/` + String(id));
    } catch (error) {
      console.log(error.message);
    }
  },

  async checkFavorite ({ commit }, { id, user }) {
    try {
      const res = await this.$axios.$get(`${serverApiUrl}favorites/isfav?id=${String(id)}&user=${String(user)}`);
      console.log('res', res);
      commit('setFav', res);
    } catch (error) {
      console.log(error.message);
    }
  }
};

export const mutations = {
  setData (state, array) {
    state.data = array;
  },
  setFav (state, val) {
    state.isFav = val;
  }
};

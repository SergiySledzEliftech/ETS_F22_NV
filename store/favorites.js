export const state = () => ({
  data: [],
  isFav: []
});

export const actions = {
  async getFavorites ({ commit }, id) {
    try {
      const res = await this.$axios.$get(`http://localhost:3001/favorites?user=${String(id)}`);
      commit('setData', res);
    } catch (error) {
      console.log(error.message);
    }
  },

  async addToFavorites ({ commit }, item) {
    try {
      await this.$axios.post('http://localhost:3001/favorites', item);
    } catch (error) {
      console.log(error.message);
    }
  },

  async removeFromFavorites ({ state, commit }, id) {
    try {
      await this.$axios.$delete('http://localhost:3001/favorites/' + String(id));
    } catch (error) {
      console.log(error.message);
    }
  },

  async checkFavorite ({ commit }, { id, user }) {
    try {
      const res = await this.$axios.$get(`http://localhost:3001/favorites/isfav?id=${String(id)}&user=${String(user)}`);
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

// 62e676835b46728ec8a083f5

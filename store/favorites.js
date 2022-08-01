export const state = () => ({
  data: []
});

export const actions = {
  async getFavorites ({ commit }, id) {
    try {
      const res = await this.$axios.$get(`http://localhost:3001/favorites?userId=${String(id)}`);
      commit('setData', res);
    } catch (error) {
      console.log(error.message);
    }
  },

  async addToFavorites ({ commit }, item) {
    try {
      const res = await this.$axios.post('http://localhost:3001/favorites', item);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  },

  async removeFromFavorites ({ commit }, id) {
    try {
      await this.$axios.$delete('http://localhost:3001/favorites/' + String(id));
      return;
    } catch (error) {
      console.log(error.message);
    }
  }
};

export const mutations = {
  setData (state, array) {
    state.data = array;
  }
};

// 62e676835b46728ec8a083f5

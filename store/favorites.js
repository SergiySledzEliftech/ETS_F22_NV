export const state = () => ({
  data: []
});

export const actions = {
  async getFavorites ({ commit }, id) {
    try {
      const productsRes = await this.$axios.$get('http://localhost:3001/search/all');
      commit('setData', productsRes);
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

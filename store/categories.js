import Vue from 'vue';
export const state = () => ({
  goods: [],
  categories: [],
  searchingItems: [],
  options: {},
  isLoading: false,
  autocompleteLoader: false,
  error: null
});

export const mutations = {
  setGoods (state, goods) {
    state.goods = goods;
  },
  setCategories (state, categories) {
    state.categories = categories;
  },
  setSearchingItems (state, searchingItems) {
    state.searchingItems = searchingItems;
  },
  setOptions (state, [param, value]) {
    if (Object.keys(value).length > 0) {
      Vue.set(state.options, 'price', { param: value });
    } else {
      Vue.set(state.options, param, value);
    }
  },
  setLoading (state, isLoading) {
    state.isLoading = isLoading;
  },
  setAutocompleteLoading (state, autocompleteLoader) {
    state.autocompleteLoader = autocompleteLoader;
  },
  setError (state, error) {
    state.loading = error;
  }
};

export const actions = {
  async getAllGoods ({ _, commit }) {
    commit('setLoading', true);
    try {
      const productsRes = await this.$axios.$get('http://localhost:3001/search/all');
      commit('setGoods', productsRes);
    } catch (err) {
      commit('setError', err.message);
    } finally {
      commit('setLoading', false);
    }
  },
  async getAllGoodsAndCategories ({ _, commit }) {
    commit('setLoading', true);
    try {
      const productsRes = await this.$axios.$get('http://localhost:3001/search/all');
      commit('setGoods', productsRes);
      const categoriesRes = await this.$axios.$get('http://localhost:3001/search/categories');
      commit('setCategories', categoriesRes);
    } catch (err) {
      commit('setError', err.message);
    } finally {
      commit('setLoading', false);
    }
  },
  async search ({ _, commit }, values) {
    const { value, selectedValue } = values;
    commit('setAutocompleteLoading', true);
    try {
      const items = await this.$axios.$get(`http://localhost:3001/search?q=${value}`);
      const itemsRes = items.map(({ title, category }) => ({ title, category }));
      commit('setSearchingItems', itemsRes);
      if (selectedValue) {
        const productsRes = await this.$axios.$get(`http://localhost:3001/search?q=${selectedValue}`);
        commit('setGoods', productsRes);
      }
    } catch (err) {
      commit('setError', err.message);
    } finally {
      commit('setAutocompleteLoading', false);
    }
  },
  async filter ({ _, commit }, values) {
    const { value } = values;
    commit('setLoading', true);
    try {
      const productsRes = await this.$axios.$get(`http://localhost:3001/search?q=${value}`);
      commit('setGoods', productsRes);
    } catch (err) {
      commit('setError', err.message);
    } finally {
      commit('setLoading', false);
    }
  }
};

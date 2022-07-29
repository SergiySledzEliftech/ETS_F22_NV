export const state = () => ({
  goods: [],
  categories: [],
  searchingItems: [],
  options: null,
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
  setOptions (state, options) {
    state.searchingItems = options;
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
  async search ({ state, commit }, values) {
    const { value, selectedValue } = values;
    commit('setAutocompleteLoading', true);
    try {
      const items = await this.$axios.$get(`http://localhost:3001/search?q=${value}`);
      const itemsRes = items.map(({ title, category }) => ({ title, category }));
      commit('setSearchingItems', itemsRes);
      // console.log(value);
      console.log(selectedValue);
      if (selectedValue) {
        const productsRes = await this.$axios.$get(`http://localhost:3001/search?q=${selectedValue}`);
        commit('setGoods', productsRes);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      commit('setAutocompleteLoading', false);
    }
  }
};

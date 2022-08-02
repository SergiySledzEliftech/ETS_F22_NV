import Vue from 'vue';
import { serverApiUrl } from '~/settings/config';
export const state = () => ({
  goods: [],
  categories: [],
  searchingItems: [],
  price: {
    $gte: null,
    $lte: null
  },
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
  setClearPrice (state, price) {
    state.price = price;
  },
  setClearOption (state, options) {
    state.options = options;
  },
  setPrice (state, [param, value]) {
    Vue.set(state.price, param, value);
  },
  setOptions (state, [param, value]) {
    Vue.set(state.options, param, value);
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
  async getAllCategories ({ _, commit }) {
    commit('setLoading', true);
    try {
      const categoriesRes = await this.$axios.$get(`${serverApiUrl}search/categories`);
      commit('setCategories', categoriesRes);
    } catch (err) {
      commit('setError', err.message);
    } finally {
      commit('setLoading', false);
    }
  },
  async getAllGoodsAndCategories ({ _, commit }) {
    commit('setLoading', true);
    try {
      const productsRes = await this.$axios.$get(`${serverApiUrl}search/all`);
      commit('setGoods', productsRes);
      const categoriesRes = await this.$axios.$get(`${serverApiUrl}search/categories`);
      commit('setCategories', categoriesRes);
    } catch (err) {
      commit('setError', err.message);
    } finally {
      commit('setLoading', false);
    }
  },
  async searchProduct ({ _, commit }, values) {
    const { value, selectedValue } = values;
    commit('setAutocompleteLoading', true);
    try {
      const items = await this.$axios.$get(`${serverApiUrl}search?q=${value}`);
      const itemsRes = items.map(({ title, category }) => ({ title, category }));
      commit('setSearchingItems', itemsRes);
      if (selectedValue) {
        const productsRes = await this.$axios.$get(`${serverApiUrl}search?q=${selectedValue}`);
        commit('setGoods', productsRes);
      }
    } catch (err) {
      commit('setError', err.message);
    } finally {
      commit('setAutocompleteLoading', false);
    }
  },
  async filterProducts ({ _, commit }, values) {
    commit('setLoading', true);
    try {
      const productsRes = await this.$axios.$post(`${serverApiUrl}search/filter`, values);
      commit('setGoods', productsRes);
    } catch (err) {
      commit('setError', err.message);
    } finally {
      commit('setLoading', false);
    }
  },
  async clearOpt ({ _, commit }) {
    commit('setLoading', true);
    try {
      const productsRes = await this.$axios.$post(`${serverApiUrl}search/filter`, {});
      commit('setGoods', productsRes);
      commit('setClearPrice', { $gte: null, $lte: null });
      commit('setClearOption', {});
    } catch (err) {
      commit('setError', err.message);
    } finally {
      commit('setLoading', false);
    }
  }
};

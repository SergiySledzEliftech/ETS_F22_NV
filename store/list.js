export const state = () => ({
  view: 'grid',
  page: 1,
  perPage: 6,
  perPageArray: [6, 12, 24, 48, 96],
  totalPages: 1,
  loading: false
});

export const actions = {
  calculateTotalPages ({ commit }, list) {
    commit('setTotalPages', list);
  },
  calcPage ({ commit }, num) {
    commit('setPage', num);
  },
  calcPerPage ({ commit }, num) {
    commit('setPerPage', num);
    commit('setPage', 1);
  },
  setLoad ({ commit }, val) {
    commit('setLoading', val);
  }
};

export const mutations = {
  changeView (state) {
    state.view = state.view === 'grid' ? 'list' : 'grid';
  },
  setLoading (state, val) {
    state.loading = val;
  },
  setTotalPages (state, list) {
    state.totalPages = Math.ceil(list.length / state.perPage);
  },
  setPerPage (state, num) {
    state.perPage = num;
  },
  setPage (state, num) {
    state.page = num;
  }
};

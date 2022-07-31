export const state = () => ({
  view: 'grid',
  page: 1,
  perPage: 6,
  perPageArray: [6, 12, 24, 48, 96],
  totalPages: 1,
  loading: false,
  data: [],
  user: {
    firstName: '',
    lastName: '',
    nickname: '',
    about: '',
    email: '',
    phone: '',
    optionalPhone: '',
    location: ''
  },
  passes: {
    oldPass: '',
    newPass: ''
  }
});

export const actions = {
  deleteElem ({ commit }, id) {
    commit('deleteItem', id);
  },
  calculateTotalPages ({ commit }, list) {
    commit('setTotalPages', list);
  },
  calcPage ({ commit }, num) {
    commit('setPage', num);
  },

  async getUser ({ state, commit }, id) {
    try {
      const res = await this.$axios.get('http://localhost:3001/users/' + id);
      commit('setUserData', res);
    } catch (error) {
      this.error = error.message;
      // eslint-disable-next-line no-console
      console.log('in profile ' + error.message);
    }
  },

  async updateUser ({ state, commit }, id) {
    try {
      await this.$axios.put('http://localhost:3001/users/' + id, state.user);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error update');
    }
  },
  async updatePass ({ state, commit }, id) {
    return await this.$axios.put('http://localhost:3001/users/' + id + '/pass', state.passes);
  },
  setLoad ({ commit }, val) {
    commit('setLoading', val);
  },
  async getProducts ({ commit }) {
    try {
      const products = await this.$axios.$get('http://localhost:3001/search/all');
      commit('setData', products);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('data ' + error.message);
    }
  }
};

export const mutations = {
  setData (state, array) {
    state.data = array;
  },
  changeView (state) {
    state.view = state.view === 'grid' ? 'list' : 'grid';
  },
  setLoading (state, val) {
    state.loading = val;
  },
  deleteItem (state, id) {
    state.dataAds = state.dataAds.filter(item => item.id !== id);
  },
  setTotalPages (state, list) {
    state.totalPages = Math.ceil(list.length / state.perPage);
  },
  setPerPage (state, num) {
    state.perPage = num;
    state.page = 1;
  },
  setPage (state, num) {
    state.page = num;
  },
  setUserData (state, user) {
    state.user = user.data;
  },
  updateFirstName (state, value) {
    state.user.firstName = value;
  },
  updateLastName (state, value) {
    state.user.lastName = value;
  },
  updateNickname (state, value) {
    state.user.nickname = value;
  },
  updateEmail (state, value) {
    state.user.email = value;
  },
  updatePhone (state, value) {
    state.user.phone = value;
  },
  updateOptionalPhone (state, value) {
    state.user.optionalPhone = value;
  },
  updateAbout (state, value) {
    state.user.about = value;
  },
  updateLocation (state, value) {
    state.user.location = value;
  },
  updateOldPass (state, value) {
    state.passes.oldPass = value;
  },
  updateNewPass (state, value) {
    state.passes.newPass = value;
  }
};

import { serverApiUrl } from '~/settings/config';
// const serverApiUrl = 'http://localhost:3001/';
export const state = () => ({
  data: [],
  dataBorrow: [],
  dataLend: [],
  avatarUploader: {},
  serverUrl: serverApiUrl,
  user: {
    firstName: '',
    lastName: '',
    nickname: '',
    about: '',
    avatar: '',
    email: '',
    phone: 1,
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

  async getUser ({ state, commit }, id) {
    try {
      const res = await this.$axios.get(`${serverApiUrl}users/` + id);
      commit('setUserData', res);
    } catch (error) {
      this.error = error.message;
      alert('in profile ' + error.message);
    }
  },

  async updateUser ({ state, commit }, id) {
    try {
      console.log(state.user);
      await this.$axios
        .put(`${serverApiUrl}users/` + id, state.user)
        .then(response => alert(response.data));
    } catch (e) {
      alert('Error update');
    }
  },

  async updatePass ({ state, commit }, id) {
    await this.$axios
      .put(`${serverApiUrl}users/` + id + '/pass', state.passes)
      .then(response => alert(response.data));
  },

  async updateAvatar ({ state, commit }, id) {
    const formData = new FormData();
    formData.append('avatarUploader', state.avatarUploader);
    await this.$axios
      .post(`${serverApiUrl}files/` + id, formData)
      .then(async (response) => {
        const avatar = {
          avatar: await response.data.data.filename
        };
        await alert(response.data.message);
        await this.$axios.put(`${serverApiUrl}users/` + id + '/avatar', avatar);
      });
  },

  async getProducts ({ commit }, id) {
    try {
      const products = await this.$axios.$get(`${serverApiUrl}search/items?id=${String(id)}`);
      // const products = await this.$axios.$get(`${serverApiUrl}search/all`);
      commit('setData', products);
    } catch (error) {
      alert('data ' + error.message);
    }
  },

  async deleteProduct ({ commit }, id) {
    try {
      await this.$axios.$delete(`${serverApiUrl}search/` + String(id));
      return;
    } catch (error) {
      console.log(error.message);
    }
  },

  async getLentProducts ({ commit }, id) {
    try {
      const products = await this.$axios.$get(`${serverApiUrl}search/lent?id=${String(id)}`);
      console.log(products);
      commit('setDataLend', products);
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
  setDataLend (state, array) {
    state.dataLend = array;
  },
  setDataBorrow (state, array) {
    state.dataBorrow = array;
  },
  deleteItem (state, id) {
    state.dataAds = state.dataAds.filter(item => item.id !== id);
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
    state.user.phone = +value;
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
  },
  uploadAvatar (state, value) {
    state.avatarUploader = value;
  }
};

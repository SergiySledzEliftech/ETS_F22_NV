import { serverApiUrl } from '~/settings/config';

export const state = () => ({
  data: [],
  avatarUploader: {},
  serverUrl: serverApiUrl,
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

  async getUser ({ state, commit }, id) {
    try {
      const res = await this.$axios.get(`${serverApiUrl}users/` + id);
      commit('setUserData', res);
    } catch (error) {
      this.error = error.message;
      // eslint-disable-next-line no-console
      console.log('in profile ' + error.message);
    }
  },

  async updateUser ({ state, commit }, id) {
    try {
      await this.$axios
        .put(`${serverApiUrl}users/` + id, state.user)
        .then(response => alert(response.data));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Error update');
    }
  },

  async updatePass ({ state, commit }, id) {
    await this.$axios
      .put(`${serverApiUrl}users/` + id + '/pass', state.passes)
      .then(response => alert(response.data));
  },

  async updateAvatar ({ state, commit }, id) {
    await this.$axios
      .post(`${serverApiUrl}files/` + id, state.avatarUploader)
      .then(async (response) => {
        alert(response.message);
        await this.$axios.put(`${serverApiUrl}users/` + id, { avatar: `files/${response.data.filename}` });
      });
  },

  async getProducts ({ commit }, id) {
    try {
      const products = await this.$axios.$get(`${serverApiUrl}/search/ads?id=${String(id)}`);
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
  },
  uploadAvatar (state, value) {
    state.avatarUploader = value;
  }
};

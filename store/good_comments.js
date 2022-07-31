export const state = () => ({
  comments: [],
  userComments: [],
  loading: false
});

export const mutations = {
  setComments (state, comments) {
    state.comments = comments;
  },
  setUserComments (state, userComments) {
    state.userComments = userComments;
  },
  setLoading (state, loading) {
    state.loading = loading;
  },
  deleteComment (state, index) {
    state.comments.splice(index, 1);
  },
  deleteUserComment (state, index) {
    state.userComments.splice(index, 1);
  },
  setListAllComments (state, comments) {
    comments = state.comments;
  },
  setListUserComments (state, userComments) {
    userComments = state.userComments;
  }
};

export const actions = {
  async loadComments ({ state, commit }, goodId) {
    commit('setLoading', true);

    const { data } = await this.$axios.get('https://glomare.herokuapp.com/comments/?goodId=' + goodId);
    commit('setComments', data);
    commit('setLoading', false);
  },
  async loadUserComments ({ state, commit }, { userId, goodId }) {
    commit('setLoading', true);

    const { data } = await this.$axios.get('https://glomare.herokuapp.com/comments/my?userId=' + userId + '&goodId=' + goodId);
    commit('setUserComments', data);
    commit('setLoading', false);
  },
  async createComment ({ state, commit }, data) {
    commit('setLoading', true);
    await this.$axios.$post('https://glomare.herokuapp.com/comments', data);
    commit('setLoading', false);
  },
  async removeComment ({ state, commit }, id) {
    commit('setLoading', true);
    await this.$axios.$delete('https://glomare.herokuapp.com/comments/' + id);
    commit('setLoading', false);
  },
  async updateCommentLikes (
    { state, commit },
    { id, like, dislike }
  ) {
    await this.$axios.$put(
      'https://glomare.herokuapp.com/comments/' + id,
      {
        like,
        dislike
      });
  }
};

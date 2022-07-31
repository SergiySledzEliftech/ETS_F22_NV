export const state = () => ({
  likeBlock: {},
  likeStatusExist: false
});

export const mutations = {
  setLikeBlock (state, likeBlock = {}) {
    state.likeBlock = likeBlock;
  },
  setLikeStatus (state, likeStatusExist) {
    state.likeStatusExist = likeStatusExist;
  }
};

export const actions = {
  async loadLikeBlock (
    { state, commit },
    { commentId, userId }
  ) {
    const { data } = await this.$axios.get(
      'http://localhost:3001/likes/?commentId=' + commentId + '&userId=' + userId
    );
    if (!data) {
      commit('setLikeStatus', false);
    } else if (data) {
      commit('setLikeStatus', true);
    }
    commit('setLikeBlock', data);
  },
  async checkLikeBlock (
    { state, commit },
    { commentId, userId, like }
  ) {
    const { data } = await this.$axios.get(
      'http://localhost:3001/likes/?commentId=' + commentId + '&userId=' + userId
    );
    if (data) {
      await this.$axios.$put('http://localhost:3001/likes/' + data._id, {
        commentId,
        userId,
        like
      });
    }
    if (!data) {
      await this.$axios.$post('http://localhost:3001/likes', {
        commentId,
        userId,
        like
      });
    }
  }
};

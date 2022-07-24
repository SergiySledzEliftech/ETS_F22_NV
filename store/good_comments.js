// import Vue from 'vue'

export const state = () => ({
  comments: [],
  userComments: [],
  loading: true
})

export const mutations = {
  setComments (state, comments) {
    state.comments = comments
  },
  setUserComments (state, userComments) {
    state.userComments = userComments
  },
  setLoading (state, loading) {
    state.loading = loading
  }
}

export const actions = {
  async loadComments ({ state, commit }) {
    commit('setLoading', true)

    const { data } = await this.$axios.get('http://localhost:3001/comments')

    commit('setComments', data)
    commit('setLoading', false)
  },
  async loadUserComments ({ state, commit }) {
    commit('setLoading', true)

    const { data } = await this.$axios.get('http://localhost:3001/comments/my')

    commit('setUserComments', data)
    commit('setLoading', false)
  },
  async createComment ({ state, commit }, data) {
    commit('setLoading', true)
    await this.$axios.$post('http://localhost:3001/comments', data)
    commit('setLoading', false)
  },
  // ???
  setLoading ({ state, commit }, loading) {
    commit('setLoading', loading)
  }
}

export const state = () => ({
  orderedGoods: []
})

export const mutations = {
  setOrderedGoods (state, goods) {
    state.orderedGoods = goods
    console.log(state.orderedGoods)
  }
}

export const actions = {
}

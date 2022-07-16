export const state = () => ({
  selectedCity: 'Kyiv',
  isLogin: true
})

export const mutations = {
  changeCity (state, newCity) {
    state.selectedCity = newCity.target.innerText
  },
  changeStatusAuth (state, newStatus) {
    this.isLogin = newStatus
  }
}

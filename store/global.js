export const state = () => ({
  selectedCity: 'Kyiv'
})

export const mutations = {
  changeCity (state, newCity) {
    state.selectedCity = newCity.target.innerText
  }
}

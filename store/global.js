export const state = () => ({
  selectedCity: 'Kyiv',
  isLogin: false
});

export const mutations = {
  changeCity (state, newCity) {
    state.selectedCity = newCity.target.innerText;
  },
  changeStatusAuth (state, newStatus) {
    state.isLogin = newStatus;
  }
};

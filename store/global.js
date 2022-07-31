export const state = () => ({
  selectedCity: 'Kyiv',
  tab: 0
});

export const mutations = {
  changeCity (state, newCity) {
    state.selectedCity = newCity.target.innerText;
  },

  changeTab (state, newTab) {
    state.tab = newTab;
  }
};

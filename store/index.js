import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const getters = {
  getCounter (state) {
    return state.counter;
  }
};

export const mutations = {
  increment (state) {
    state.counter++;
  }
};

export const actions = {
  // async fetchCounter(state) {
  //   // make request
  //   const res = { data: 10 };
  //   state.counter = res.data;
  //   return res.data;
  // }
};

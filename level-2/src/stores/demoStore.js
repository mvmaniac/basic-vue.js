import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    price: 100
  },
  getters: {
    originPrice: (state) => state.price,
    doublePrice: (state) => state.price * 2,
    triplePrice: (state) => state.price * 3
  }
});

export default {};

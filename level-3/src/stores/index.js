import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    list: [],
    user: {},
    item: {}
  },
  getters: {
    fetchedUser: (state) => state.user,
    fetchedItem: (state) => state.item
  },
  mutations,
  actions
});

export default store;

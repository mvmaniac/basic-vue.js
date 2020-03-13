import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {}
  },
  getters: {
    fetchedAsk: state => state.ask,
    fetchedJobs: state => state.jobs,
    fetchedNews: state => state.news,
    fetchedUser: state => state.user,
    fetchedItem: state => state.item
  },
  mutations,
  actions
});

export default store;

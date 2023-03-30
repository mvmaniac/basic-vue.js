import { createStore } from 'vuex';

import mutations from './mutations';
import actions from './actions';

export default createStore({
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

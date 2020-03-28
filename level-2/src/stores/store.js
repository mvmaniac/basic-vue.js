import Vue from 'vue';
import Vuex from 'vuex';

import todoApp from './modules/todoApp';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todoApp
  }
});

import Vue from 'vue';

import App from './App.vue';
import router from './routes';
import store from './stores';
import ChartPlugin from './plugins/ChartPlugin';

Vue.config.productionTip = false;

// install()가 실행 됨
Vue.use(ChartPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');

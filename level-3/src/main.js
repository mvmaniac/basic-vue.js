import { createApp } from 'vue';

import App from './App.vue';
import router from './routes';
import store from './stores';
import { plugin as bus } from './plugins/bus';

createApp(App).use(router).use(store).use(bus).mount('#app');

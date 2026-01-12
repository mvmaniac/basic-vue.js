import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';

import { createPinia } from 'pinia';

import type { Person } from '@/shared/types';
import type { DefineComponent } from 'vue';

import App from '@/App.vue';
import router from '@/routes';

import dayjs from '@/shared/plugins/dayjs';
import funcPlugins from '@/shared/plugins/func';
// import globalComponents from '@/shared/plugins/global-components';
import globalDirectives from '@/shared/plugins/global-directives';
import objPlugins from '@/shared/plugins/obj';
import person from '@/shared/plugins/person';

import '@/style.css';

const app = createApp(App as DefineComponent);

// 글로벌 컴포넌트 설정 다만 직접 하는 대신 unplugin-vue-components 사용...
// app.use(globalComponents);

// 플러그인 테스트
app.use(funcPlugins);
app.use(objPlugins, { name: '짐코딩' });
app.use<Person>(person, { name: '홍길동' });

app.use(globalDirectives);
app.use(dayjs);
app.use(router);

app.use(createPinia());

app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';

// vite 환경변수
console.log('MODE: ', import.meta.env.MODE);
console.log('BASE_URL: ', import.meta.env.BASE_URL);
console.log('PROD: ', import.meta.env.PROD);
console.log('DEV: ', import.meta.env.DEV);
console.log('VITE_APP_API_URL: ', import.meta.env.VITE_APP_API_URL);

import Vue from 'vue';
import VueRouter from 'vue-router';

import ChartView from '../views/ChartView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../views/CreateListView';
import bus from '../utils/bus';
import store from '../stores';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      // 컴포넌트는 mixin 사용
      // 데이터는 라우터 네비게이션 가드 사용
      path: '/news',
      name: 'news',
      component: NewsView,
      beforeEnter: (to, from, next) => {
        // console.log('to: %o', to);
        // console.log('from: %o', from);
        // console.log('next: %o', next);
        bus.$emit('start:spinner');

        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            // 해당 컴포넌트의 mounted로 처리
            // bus.$emit('end:spinner');
            next();
          })
          .catch(e => console.error(e));
      }
    },
    {
      // 컴포넌트는 HOC 사용
      // 데이터는 라이프 사이클 훅 사용 (created)
      path: '/ask',
      name: 'ask',
      component: createListView('AskView')
    },
    {
      // 컴포넌트는 mixin 사용
      // 데이터는 라이프 사이클 훅 사용 (created)
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/item/:id',
      component: ItemView
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/chart',
      component: ChartView
    }
  ]
});

export default router;

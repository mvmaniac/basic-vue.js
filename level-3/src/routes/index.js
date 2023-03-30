import { createRouter, createWebHistory } from 'vue-router';

import ChartView from '../views/ChartView.vue';
import DesignView from '../views/DesignView.vue';
import ShowView from '../views/ShowView.vue';
import NewsView from '../views/NewsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../views/CreateListView';

import store from '../stores';

const router = createRouter({
  history: createWebHistory(),
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
      beforeEnter: (to, _from, next) => {
        // console.log('to: %o', to);
        // console.log('from: %o', from);
        // console.log('next: %o', next);

        // proxy.$bus.emit('start-spinner');

        store
          .dispatch('FETCH_LIST', to.name)
          .then(() => {
            // 해당 컴포넌트의 mounted로 처리
            // bus.$emit('end-spinner');
            next();
          })
          .catch((e) => console.error(e));
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
      path: '/show',
      name: 'show',
      component: ShowView
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
    },
    {
      path: '/design',
      component: DesignView
    }
  ]
});

export default router;

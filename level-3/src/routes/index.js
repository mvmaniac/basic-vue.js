import Vue from 'vue';
import VueRouter from 'vue-router';

import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView
    },
    {
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
    }
  ]
});

export default router;

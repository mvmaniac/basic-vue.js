import { createRouter, createWebHistory } from 'vue-router';

import type { RouteLocation, RouteRecordRaw } from 'vue-router';

import AboutView from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';
import MyPage from '@/views/MyPage.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView as never,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView as never,
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostListView as never,
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView as never,
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetailView as never,
    // route를 통해서도 props로 넣길 수 있음,
    // PostListView에서는 props로 넣기므로 동일하게 처리?
    // props: true,
    props: (route) => ({ id: parseInt(route.params.id as string) }),
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditView as never,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView as never,
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView as never,
    children: [
      {
        path: '',
        name: 'NestedHome',
        component: NestedHomeView as never,
      },
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView as never,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView as never,
      },
    ],
  },
  {
    path: '/my',
    name: 'MyPage',
    component: MyPage as never,
    beforeEnter: [removeQueryString],
  },
];

function removeQueryString(to: RouteLocation) {
  if (Object.keys(to.query).length > 0) {
    return { ...to, query: {} };
  }
}

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

router.beforeEach((to, from) => {
  console.log('from: ', from);
  console.log('to: ', to);

  // if (to.name === 'MyPage') {
  //   // return false // 이동 안됨
  //   // return '/posts'; // 다른 페이지로 이동 처리
  //   return '/my';
  // }
});

export default router;

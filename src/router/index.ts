import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'about-us',
    component: () =>
      import(/* webpackChunkName: "about-us" */ '../views/about-us.vue')
  },
  {
    path: '/recruitment',
    name: 'recruitment',
    component: () =>
      import(/* webpackChunkName: "recruitment" */ '../views/recruitment.vue')
  },
  {
    path: '/rank-structure',
    name: 'rank-structure',
    component: () =>
      import(
        /* webpackChunkName: "rank-structure" */ '../views/rank-structure.vue'
      )
  },
  {
    path: '/games',
    name: 'games',
    component: () =>
      import(/* webpackChunkName: "games" */ '../views/games.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

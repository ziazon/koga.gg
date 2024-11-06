import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('@/views/HomePage.vue')
    },
    {
      path: '/recruitment',
      name: 'recruitment',
      component: () => import('@/views/RecruitmentPage.vue')
    },
    {
      path: '/structure',
      name: 'structure',
      component: () => import('@/views/StructurePage.vue')
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('@/views/VideosPage.vue')
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('@/views/GamesPage.vue')
    }
  ]
});

export default router;

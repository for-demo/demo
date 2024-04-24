import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory('/demo/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/index.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../pages/about.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
})

export default router
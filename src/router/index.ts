/* eslint-disable no-console */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/anime',
      name: 'anime',
      component: () => import('@/views/AnimeView.vue'),
    },
    {
      path: '/live',
      name: 'live',
      component: () => import('@/views/LiveView.vue'),
    },
    {
      path: '/:pathMatch(.*)*', // 动态路由匹配所有页面任意个或者0个任意字符
      name: '404',
      component: () => import('@/components/NotFound.vue'),
    },
  ],
  scrollBehavior(to, from) {
    console.log(to, from)
    return {
      left: 0,
      top: 0,
    }
  },
})

// 配置钩子
router.beforeEach((to, from, next) => {
  console.log(to, from)
  // ...
  next()
})

router.afterEach((to, from) => {
  console.log(to, from)
  // window.scrollTo(0, 0);
})

export default router

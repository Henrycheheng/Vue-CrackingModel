// router-plugin.js

export default {
  install: (app: any, options: { router: any }) => {
    const { router } = options

    // 监听路由变化
    router.beforeEach((to: { name: any; path: any }, from: any, next: () => void) => {
      // 解析新的路由信息，例如从 to.path 中获取组件名称和路径
      const componentName = to.name // 假设组件名称存储在路由的名称中
      const componentPath = to.path

      // 根据解析的信息动态添加新的路由规则
      router.addRoute({
        path: componentPath,
        name: componentName,
        component: () => import(`../views/${componentName}.vue`),
      })

      next()
    })

    // 添加通用的 404 路由规则
    router.addRoute({
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../components/NotFound.vue'),
    })
  },
}

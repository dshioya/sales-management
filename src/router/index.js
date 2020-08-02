import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store, ssrContext }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach(async (to, from, next) => {
    if (!store.getters['auth/isGreeted']) {
      // サーバーへの挨拶をしていない場合
      try {
        await store.dispatch('auth/greet')
      } catch (e) {
        console.error('初期処理に失敗')
        next(false)
        return
      }
    }

    if (to.path === '/login') {
      if (store.getters['auth/isAuthenticated']) {
        // 認証済みの場合はトップページへ遷移
        next('/customer')
        return
      }
    } else {
      if (!store.getters['auth/isAuthenticated']) {
        next('/login')
        return
      }
    }

    next()
  })

  return Router
}

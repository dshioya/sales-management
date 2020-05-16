
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('pages/auth/Login.vue')
  },
  {
    path: '/customer',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/customer/Index.vue') },
      { path: ':id', component: () => import('pages/customer/Detail.vue') }
    ]
  },
  {
    path: '/order',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/order/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

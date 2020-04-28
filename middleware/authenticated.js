export default async ({ route, store, redirect, $axios }) => {
  let isAuthenticated = store.getters['auth/isAuthenticated']

  if (!isAuthenticated) {
    // 認証済みでない場合はグリーティング処理
    await $axios.get('/greet').then((res) => {
      if (res.data.success && res.data.token) {
        store.commit('auth/authenticated', res.data)
        isAuthenticated = true
      }
    })
  }

  if (route.path === '/login') {
    if (isAuthenticated) {
      return redirect('/customer')
    }
  } else if (!isAuthenticated) {
    return redirect('/login')
  }
}

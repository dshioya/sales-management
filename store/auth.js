export const state = () => ({
  token: '',
  userId: '',
  name: '',
  icon: ''
})

export const mutations = {
  authenticated(state, payload) {
    state.token = payload.token
    state.userId = payload.userId
    state.name = payload.name
    state.icon = payload.icon
  },
  logout(state) {
    state.token = ''
    state.userId = ''
    state.name = ''
    state.icon = ''
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.token
  },
  getName(state) {
    return state.name
  },
  getIcon(state) {
    return state.icon
  }
}

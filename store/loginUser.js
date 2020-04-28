export const state = () => ({
  userId: '',
  name: ''
})

export const mutations = {
  setUserInfo(state, payload) {
    state.userId = payload.userId
    state.name = payload.name
  }
}

export const getters = {
  getUserInfo(state) {
    return {
      userId: state.userId,
      name: state.name
    }
  }
}

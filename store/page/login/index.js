export const state = () => ({
  userId: ''
})

export const mutations = {
  setValues(state, payload) {
    state.userId = payload.userId
  }
}

export const getters = {
  getValues(state) {
    return {
      userId: state.userId
    }
  }
}

export function setData (state, data) {
  state.greeted = true
  state.token = data.token || ''
}

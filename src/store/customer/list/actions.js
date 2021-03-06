import axios from 'axios'

export async function load ({ commit }, conditions = {}) {
  await axios.get('/api/customer', {
    params: conditions
  })
    .then(res => {
      commit('setData', res.data)
    })
    .catch(() => {
      console.log(arguments)
    })
}

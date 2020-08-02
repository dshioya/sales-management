import axios from 'axios'

export async function load ({ commit }) {
  await axios.get('/api/shop/options')
    .then(res => {
      commit('setData', res.data)
    })
    .catch(() => {
      console.log(arguments)
    })
}

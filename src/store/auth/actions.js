import axios from 'axios'

export async function greet ({ commit }) {
  await axios.get('/api/greet')
    .then(res => {
      commit('setData', res.data)
    })
}

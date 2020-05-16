const env = require(`../../env/${process.env.NODE_ENV}.json`)

import axios from 'axios'
import { Service } from 'axios-middleware'

axios.defaults.baseURL = env.api.url

export default ({ app, store }) => {
  app.$axios = axios

  const service = new Service(axios)

  service.register({
    onRequest (config) {
      const token = store.getters['auth/getToken']

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    }
  })
}

const env = require(`../../env/${process.env.NODE_ENV}.json`)
import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = env.api.url

Vue.prototype.$axios = axios

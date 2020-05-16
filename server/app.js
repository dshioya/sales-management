const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 3000

const app = express()

app.use('/api', require('./api'))

if (process.env.NODE_ENV === 'production') {
  app.use(history())
  // eslint-disable-next-line no-path-concat
  app.use(serveStatic(__dirname + '/../dist/spa'))
}

app.listen(port)

const auth = require('./auth/auth.js')()

const dotenv = require('dotenv')
dotenv.config()

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./data/db.json')

const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3333

server.use(middlewares)

server.use(auth.initialize())

server.use(jsonServer.bodyParser)

server.post('/token', (req, res) => {
  return auth.generateToken(req, res)
})

server.use('/api', auth.authenticate(), router)

server.listen(port, () => {
  console.log(`SOS_Ambulancia-API Server is running on https://localhost:${port}/`)
})
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    jwtSecret: process.env.API_KEY,
    jwtSession: { session: false }
}

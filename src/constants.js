require('dotenv').config({ path: `${__dirname}/../.env` })

const parseBoolean = (v) => (v && v.toLowerCase() === 'true')

// Database
module.exports.DB_USER = process.env.DB_USER
module.exports.DB_PASSWORD = process.env.DB_PASSWORD
module.exports.DB_NAME = process.env.DB_NAME
module.exports.DB_HOST = process.env.DB_HOST
module.exports.DB_PORT = process.env.DB_PORT
module.exports.DB_DIALECT = process.env.DB_DIALECT
module.exports.DB_LOG = parseBoolean(process.env.DB_LOG)

// Server
module.exports.SERVER_PORT = process.env.SERVER_PORT || 3000

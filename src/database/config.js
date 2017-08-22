const constants = require('../constants')

const config = {
  username: constants.DB_USER,
  password: constants.DB_PASSWORD,
  database: constants.DB_NAME,
  host: constants.DB_HOST,
  dialect: constants.DB_DIALECT,
  port: constants.DB_PORT,
  logging: (constants.DB_LOG === true) ? console.log : false
}

module.exports = Object.assign({}, config, {
  development: config,
  test: config,
  production: config
})

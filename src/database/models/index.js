const Sequelize = require('sequelize')
const fs = require('fs')
const cls = require('continuation-local-storage')
const config = require('../config')

const models = {}

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

const namespace = cls.createNamespace(require('../../../package.json').name)

Sequelize.useCLS(namespace)

fs
  .readdirSync(__dirname)
  .filter(f => !f.includes('index'))
  .map((modelFile) => {
    const model = sequelize.import(`${__dirname}/${modelFile}`)
    models[model.name] = model
    return model
  })
  .forEach(model => {
    if (model.associate) model.associate(models)
  })

module.exports = models
module.exports.sequelize = sequelize
module.exports.Sequelize = Sequelize

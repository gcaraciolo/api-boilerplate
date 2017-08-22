const models = require('../database/models')

const sequelize = models.sequelize
const Sequelize = models.Sequelize

const openReadCommitted = (fn) =>
  sequelize.transaction({
    isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED
  }, (transaction) => fn(transaction))

module.exports = {
  openReadCommitted
}

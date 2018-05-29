const sequelize = require('sequelize')

module.exports = db => db.define('medicamento', {
  via: sequelize.STRING,
  formaFarmaceutica: sequelize.STRING,
  validade: sequelize.STRING,
  lote: sequelize.STRING
})
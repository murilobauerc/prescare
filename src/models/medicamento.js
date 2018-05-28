const sequelize = require('sequelize')

module.exports = db => db.define('medicamento', {
  nomeMedicamento: sequelize.STRING,
  via: sequelize.STRING,
  formaFarmaceutica: sequelize.STRING,
  validade: sequelize.STRING,
  lote: sequelize.STRING
})
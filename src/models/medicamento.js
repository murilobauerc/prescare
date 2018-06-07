const sequelize = require('sequelize')

module.exports = db => db.define('medicamento', {
  nome: sequelize.STRING,
  intervalo: sequelize.STRING,
  via: sequelize.STRING,
  formaFarmaceutica: sequelize.STRING,
  intervalo: sequelize.STRING,
  dosagem: sequelize.STRING,
  validade: sequelize.STRING,
  lote: sequelize.STRING,
  tipo: sequelize.STRING
})
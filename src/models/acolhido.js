const sequelize = require('sequelize')

module.exports = db => db.define('acolhido', {
  nomeAcolhido: sequelize.STRING,
  idade: sequelize.INTEGER,
  peso: sequelize.FLOAT,
  alergias: sequelize.STRING,
  viaAlimentacao: sequelize.STRING
})
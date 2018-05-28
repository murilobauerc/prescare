const sequelize = require('sequelize')

module.exports = db => db.define('prescricao', {
  intervalo: sequelize.STRING,
  horario: sequelize.STRING,
  dispensacao: sequelize.BOOLEAN,
  checkTecnico: sequelize.BOOLEAN
})
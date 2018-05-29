const sequelize = require('sequelize')

module.exports = db => db.define('medicamento', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  via: sequelize.STRING,
  formaFarmaceutica: sequelize.STRING,
  validade: sequelize.STRING,
  lote: sequelize.STRING,
  },
  {
    underscored: true
  })
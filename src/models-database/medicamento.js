const sequelize = require('sequelize')

module.exports = db => db.define('medicamento', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: sequelize.STRING,
  via: sequelize.STRING,
  formaFarmaceutica: sequelize.STRING
},
{
  underscored: true
})
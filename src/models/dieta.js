const sequelize = require('sequelize')

module.exports = db => db.define('dieta', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo: sequelize.STRING,
  intervalo: sequelize.STRING,
},
{
  underscored: true
})

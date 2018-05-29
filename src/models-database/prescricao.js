const sequelize = require('sequelize')

module.exports = db => db.define('prescricao', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  intervalo: sequelize.STRING
},{
  underscored: true
})
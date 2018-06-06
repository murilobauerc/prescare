const acolhido = require('./acolhido')
const medicamento = require('./medicamento')
const dieta = require('./dieta')
const prescricao = require('./prescricao')

module.exports = db => {
  const Acolhido = acolhido(db)
  const Medicamento = medicamento(db)
  const Dieta = dieta(db)
  const Prescricao = prescricao(db)

  Prescricao.hasMany(Medicamento)
  Medicamento.belongsTo(Prescricao)
  Dieta.belongsTo(Prescricao)
  Acolhido.hasMany(Prescricao)
  Prescricao.belongsTo(Acolhido)

  return {Acolhido, Medicamento, Dieta, Prescricao}
}

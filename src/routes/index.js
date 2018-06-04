const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
const medicamentoRoutes = require('./medicamento')

const allRoutes = models => ({
  acolhidoRoutes: acolhidoRoutes(models.Acolhido),
  prescricaoRoutes: prescricaoRoutes(models.Prescricao),
  medicamentoRoutes: medicamentoRoutes(models.Medicamento),
  applicationRoutes: applicationRoutes()
})

module.exports = allRoutes

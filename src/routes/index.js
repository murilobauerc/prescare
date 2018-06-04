const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')

const editAcolhido = require('./acolhido/edit')
const getAcolhido = require('./acolhido/get')
const updateAcolhido = require('./acolhido/update')
const createAcolhido = require('./acolhido/create')

const allRoutes = models => ({
  acolhidoRoutes: acolhidoRoutes(models.Acolhido),
  prescricaoRoutes: prescricaoRoutes(models.Prescricao),
  applicationRoutes: applicationRoutes()
})

module.exports = allRoutes

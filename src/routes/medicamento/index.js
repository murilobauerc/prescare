const create = require('./create')
const edit = require('./edit')
const get = require('./get')
const update = require('./update')

module.exports = (Medicamento, router) => {
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento', create(Medicamento))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/medicamento/:medicamento_id', get(Medicamento))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/edit', edit(Medicamento))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/edit', update(Medicamento))

  return router;
  }
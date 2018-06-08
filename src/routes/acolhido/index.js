const get = require('./get')
const list = require('./list')

module.exports = (Acolhido, Prescricao, router) => {
  router.get('/acolhido/list', list(Acolhido))
  router.get('/acolhido/:acolhido_id', get(Acolhido, Prescricao))

  return router;
}

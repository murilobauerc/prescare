const get = require('./get')
const list = require('./listaAcolhidos')

module.exports = (Acolhido, router) => {
  router.get('/acolhido/:acolhido_id', get(Acolhido))
  router.get('/acolhido/listaAcolhidos', list(Acolhido))

  return router;
}

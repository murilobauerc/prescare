const get = require('./get')
const list = require('./list')

<<<<<<< HEAD
module.exports = (Acolhido, Prescricao, router) => {
  router.get('/acolhido/list', list(Acolhido))
  router.get('/acolhido/:acolhido_id', get(Acolhido, Prescricao))
=======
module.exports = (Acolhido, router) => {
  router.get('/acolhido/:acolhido_id', get(Acolhido))
  router.get('/acolhido/list', list(Acolhido))
>>>>>>> eeefe23191dd37017585d7e2b2f27d18ef94c5b1

  return router;
}

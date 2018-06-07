
const listaAcolhidos = require('../routes/listaAcolhidos')
const home = require('../routes/home')
const about = require('../routes/about')
const acolhido = require('../routes/acolhido')
const farmaceutica = require('../routes/farmaceutica')
const prescricaoAtualizada = require('../routes/prescricaoAtualizada')

const user = require('../mocks/user')
const tabelaFarmaceutica = require('../mocks/tabelaFarmaceutica')
const dadosFarmacia = require('../mocks/farmacia')

const createPrescricao = require('./prescricao/create')
const editPrescricao = require('./prescricao/edit')
const getPrescricao = require('./prescricao/get')
const destroyPrescricao = require('./prescricao/destroy')
const updatePrescricao = require('./prescricao/update')

const getMedicamento = require('./medicamento/get')
const createMedicamento = require('./medicamento/create')
const editMedicamento = require('./medicamento/edit')
const updateMedicamento = require('./medicamento/update')

const getDieta = require('./dieta/get')
const createDieta = require('./dieta/create')
const editDieta = require('./dieta/edit')
const updateDieta = require('./dieta/update')

const allRoutes = models => ({
  listaAcolhidos: listaAcolhidos(models.Acolhido),
  home: home(),
  about: about(user),
  acolhido: acolhido(models.Acolhido),
  prescricaoAtualizada: prescricaoAtualizada(tabelaFarmaceutica),
  farmaceutica: farmaceutica(dadosFarmacia),

  medicamento: getMedicamento(models.Medicamento),
  createMedicamento: createMedicamento(models.Medicamento),
  editMedicamento: editMedicamento(models.Medicamento),
  updateMedicamento:  updateMedicamento(models.Medicamento),

  createPrescricao: createPrescricao(models.Prescricao),
  editPrescricao: editPrescricao(models.Prescricao),
  getPrescricao: getPrescricao(models.Prescricao),
  destroyPrescricao: destroyPrescricao(models.Prescricao),
  updatePrescricao: updatePrescricao(models.Prescricao),

  dieta: getDieta(models.Dieta),
  createDieta: createDieta(models.Dieta),
  editDieta: editDieta(models.Dieta),
  updateDieta: updateDieta(models.Dieta)
})

module.exports = allRoutes













// const router = require('express').Router()

// const prescricaoRoutes = require('./prescricao')
// const acolhidoRoutes = require('./acolhido')
// const applicationRoutes = require('./application')

// module.exports = models => {
//   applicationRoutes(router)
//   acolhidoRoutes(models.Acolhido, router)
//   prescricaoRoutes(models.Prescricao, router)

//   return router;
// }


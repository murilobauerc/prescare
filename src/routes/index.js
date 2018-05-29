const listaAcolhidos = require('../routes/listaAcolhidos')
const home = require('../routes/home')
const about = require('../routes/about')
const acolhido = require('../routes/acolhido')
const farmaceutica = require('../routes/farmaceutica')
const prescricaoAtualizada = require('../routes/prescricaoAtualizada')
const historicoPrescricao = require('../routes/historico-prescricao')

const user = require('../mocks/user')
const acolhidos = require('../mocks/acolhido')
const tabelaFarmaceutica = require('../mocks/tabelaFarmaceutica')
const dadosFarmacia = require('../mocks/farmacia')


const allRoutes = models => ({
  home: home(),
  about: about(user),
  acolhido: acolhido(acolhidos),
  listaAcolhidos: listaAcolhidos(models.Acolhido),
  prescricaoAtualizada: prescricaoAtualizada(tabelaFarmaceutica),
  farmaceutica : farmaceutica(models.Prescricao, models.Medicamento),
  historicoPrescricao : historicoPrescricao(models.Prescricao)
})

module.exports = allRoutes

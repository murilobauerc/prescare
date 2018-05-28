const listChildren = require('../routes/listChildren')
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
  listChildren: listChildren(models.Acolhido),
  home: home(),
  about: about(user),
  acolhido: acolhido(acolhidos),
  prescricaoAtualizada: prescricaoAtualizada(tabelaFarmaceutica),
  farmaceutica : farmaceutica(dadosFarmacia),
  historicoPrescricao : historicoPrescricao(models.Prescricao, models.Acolhido)

})

module.exports = allRoutes

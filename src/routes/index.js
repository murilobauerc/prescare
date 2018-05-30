const listaAcolhidos = require('../routes/listaAcolhidos')
const home = require('../routes/home')
const about = require('../routes/about')
const acolhido = require('../routes/acolhido')
const farmaceutica = require('../routes/farmaceutica')
const prescricaoAtualizada = require('../routes/prescricaoAtualizada')
const pesquisa = require('../routes/pesquisaAcolhidos')

const user = require('../mocks/user')
const tabelaFarmaceutica = require('../mocks/tabelaFarmaceutica')
const dadosFarmacia = require('../mocks/farmacia')


const allRoutes = models => ({
  about: about(user),
  acolhido: acolhido(models.Acolhido),
  farmaceutica : farmaceutica(dadosFarmacia),
  home: home(),
  listaAcolhidos: listaAcolhidos(models.Acolhido),
  pesquisar: pesquisa(models.Acolhido),
  prescricaoAtualizada: prescricaoAtualizada(tabelaFarmaceutica),
})

module.exports = allRoutes

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const acolhido = require('./public/js/acolhido.js')
const Sequelize = require('sequelize')
const routesInitializer = require('./src/routes')
const modelsInitializer = require('./src/models')

const tabelaFarmaceutica = require('./src/mocks/tabelaFarmaceutica')
const usuarios = require('./src/mocks/userArray')
const usuario = require('./src/mocks/user')
const settings = require('./settings')
const app = express()

console.log(settings)

const databaseConnection = new Sequelize(settings.DATABASE_URL, {
  dialect: 'postgres'
})

const models = modelsInitializer(databaseConnection)
const routes = routesInitializer(models)

const startApplication = () => {
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
    .get('/login', (req, res) => {
      res.render('pages/login')
    })

    .set('views/pages', 'tabela-abas')
    .set('port', (process.env.PORT || 3000))
    .get('/', routes.home)
    .get('/about', routes.about)
    .get('/acolhido', routes.acolhido)
    .get('/lista-acolhidos', routes.listaAcolhidos)
    .get('/prescricaoAtualizada', routes.prescricaoAtualizada)
    .get('/farmaceutica', routes.farmaceutica)
    .get('/historico-prescricao', routes.historicoPrescricao)
    .listen(settings.PORT, () => console.log('Servidor iniciado em http://localhost:' + settings.PORT))
}

const criaExemplos = () => {

  const { Acolhido, Medicamento, Prescricao } = modelsInitializer(databaseConnection)
  let date = new Date

  // Acolhido.create({
  //   nomeAcolhido: 'Anderson Claiton Damacena',
  //   idade: 41,
  //   peso: 65,
  //   alergias: 'nenhuma',
  //   viaAlimentacao: 'oral'
  // }
  //   ,
  //   {
  //     nomeAcolhido: 'Andrielly Cortes da Silva Correa',
  //     idade: 5,
  //     peso: 20,
  //     alergias: 'nenhuma',
  //     viaAlimentacao: 'oral'
  //   }
  // )

  // Medicamento.create({
  //   nomeMedicamento: 'Paracetamal',
  //   via: 'oral',
  //   formaFarmaceutica: 'comprimido',
  //   validade: '25/02/2019',
  //   lote: '123456'

  // })

  // Prescricao.create({
  //   intervalo: '16-16h',
  //   horario: '8h 16h',
  //   dispensacao: false,
  //   checkTecnico: false,
  //   acolhidoId: 1,
  //   medicamentoId: 1,
  // })

}
databaseConnection
  .sync()
  .then(criaExemplos)
  .then(startApplication)
  .catch(console.log)

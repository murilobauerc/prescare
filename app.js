const express = require('express')

const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const acolhido = require('./public/js/acolhido.js')
const Sequelize = require('sequelize')
const routesInitializer = require('./src/routes')
const modelsInitializer = require('./src/models')

const tabelaFarmaceutica = require('./src/mocks/tabelaFarmaceutica')
const settings = require('./settings')
const app = express()

const databaseConnection = new Sequelize(settings.DATABASE_URL, {dialect: 'postgres'})

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
    .get('/historico', (req, res) => {
      res.render('pages/historico-prescricao')
    })
    .get('/', routes.home)
    .get('/about', routes.about)
    .get('/acolhido/:id', routes.acolhido)
    .get('/farmaceutica', routes.farmaceutica)
    .get('/lista-acolhidos', routes.listaAcolhidos)
    .get('/pesquisar/:nome',routes.pesquisar)
    .get('/prescricao-atualizada', routes.prescricaoAtualizada)
    .listen(settings.PORT, () => console.log('Servidor iniciado em http://localhost:' + settings.PORT))
}

databaseConnection
  .sync()
  .then(startApplication)
  .catch(console.log)
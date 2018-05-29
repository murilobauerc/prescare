const express = require('express')

const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const acolhido = require('./public/js/acolhido.js')
const Sequelize = require('sequelize')
const routesInitializer = require ('./src/routes')
const modelsInitializer = require ('./src/models-database/')

const tabelaFarmaceutica = require('./src/mocks/tabelaFarmaceutica')
const usuarios = require('./src/mocks/userArray')
const usuario = require('./src/mocks/user')
const settings = require('./settings')
const app = express()

const databaseConnection = new Sequelize(settings.DB_NAME, settings.DB_USER, settings.DB_PASSWORD, {
  host: settings.DB_HOST,
  dialect: 'postgres'
})

const models = modelsInitializer(databaseConnection)
const routes = routesInitializer(models)

const startApplication = () => {

  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .get('/login', (req, res) => {
      res.render('pages/login')
    })
    .get('/pesquisar', (req, res) => {
      res.render('pages/pesquisaAcolhidos')
    })
    .get('/teste', (req,res) => {
      res.render('pages/testeBanco')
    })

    .set('views/pages', 'tabela-abas')
    .get('/', routes.home)
    .get('/about', routes.about)
    .get('/acolhidas', routes.listChildren)
    .get('/acolhido/', routes.acolhido)
    .get('/acolhido/:id/historico_prescricao', routes.historicoPrescricao)
    .get('/prescricaoAtualizada', routes.prescricaoAtualizada)
    .get('/farmaceutica', routes.farmaceutica)
    .get('/historico-prescricao', routes.historicoPrescricao)
    .listen(settings.PORT, () => console.log('Servidor iniciado em http://localhost:' + settings.PORT))
}

const criaExemplos = () => {
  models.Acolhido.create({
    nome: 'Afonso',
    idade: 15,
    peso: 12.4,
    alergias: 'nenhuma',
    viaAlimentacao: 'oral'
  }).then(acolhido => {
    models.Prescricao.create({
      intervalo: '2h'
    }).then(prescricao => {
      models.Medicamento.create({
        nome: 'Paracetamol 500mg',
        via: 'oral',
        formaFarmaceutica: 'comprimido'
      }).then(medicamento => {
        prescricao.addMedicamento(medicamento)
        acolhido.addPrescricao(prescricao)
      })
    })
  })
}

databaseConnection
 .sync()
 .then(criaExemplos)
 .then(startApplication)
 .catch(console.log)

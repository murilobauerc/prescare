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
    .get('/farmaceutica/:id', routes.farmaceutica)
    .get('/historico-prescricao', routes.historicoPrescricao)
    .listen(settings.PORT, () => console.log('Servidor iniciado em http://localhost:' + settings.PORT))
}

const criaExemplos = () => {
  models.Acolhido.create({
    nomeAcolhido: 'Batatinha dois',
    idade: 15,
    peso: 12.4,
    alergias: 'Todas, vai morre',
    via_alimentacao: 'Braçal'
  }).then(acolhido => {
    models.Prescricao.create({
      intervalo: '2h',
      horario:'8h 16h'
    }).then(prescricao => {
      models.Medicamento.create({
        nomeMedicamento: 'Paracetamol 500mg',
        via: 'Oi',
        formaFarmaceutica: 'Batata Doce + Frango',
        lote: '548976',
        validade: '15/12/2021'
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

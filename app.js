const express = require('express')
const bodyParser = require('body-parser')

const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const Sequelize = require('sequelize')
const routesInitializer = require('./src/routes')
const modelsInitializer = require('./src/models')

const tabelaFarmaceutica = require('./src/mocks/tabelaFarmaceutica')
const settings = require('./settings')
const app = express()

const databaseConnection = new Sequelize(settings.DATABASE_URL, {
  dialect: 'postgres',
  define: {
    underscored: true,
    timestamps: false,
  }
})

const models = modelsInitializer(databaseConnection)
const routes = routesInitializer(models)

const startApplication = () => {
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .use(bodyParser.urlencoded({
      extended: false
    }))
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
    .use('/', routes.applicationRoutes)
    .use('/acolhido', routes.acolhidoRoutes)
    .use('/acolhido/:acolhido_id/prescricao', routes.prescricaoRoutes)

    .get('/acolhido/:acolhido_id', routes.acolhido)
    .post('/acolhido/:acolhido_id/prescricao', routes.createPrescricao)
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id', routes.getPrescricao)
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', routes.editPrescricao)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', routes.updatePrescricao)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id', routes.destroyPrescricao)


    .listen(settings.PORT, () =>
      console.log('Servidor iniciado em http://localhost:' + settings.PORT)
    );
}

databaseConnection
  .sync()
  .then(startApplication)
  .catch(console.log)
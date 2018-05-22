const express = require('express')
const Sequelize = require('sequelize')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const PORT = process.env.PORT || 3000
const DB_NAME = 'prescare'
const DB_USER = 'postgres'
const DB_PASSWORD = 'prescare'
const DB_HOST = 'localhost'
const routes = require ('./src/routes/routes')
const tabelaFarmaceutica = require('./public/js/tabelaFarmaceutica')
const userArray = require('./public/js/userArray')

const user = require('./public/js/user')
const farmacia = require('./public/js/farmacia')

const app = express()
const startApplication = () => {
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
    .set('port', (process.env.PORT || 3000))

    .get('/', routes.home)
    .get('/about', routes.about)

    .get('/prescricaoAtualizada', routes.prescricaoAtualizada)

    .get('/acolhido', routes.acolhido)
    
    .get('/farmaceutica', routes.farmaceutica)
     
    .get('/edit', routes.farmacia)

  
    .listen(PORT, () => console.log('Servidor iniciado em http://localhost:' + PORT))
}


  const databaseClient = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      dialect: 'postgres'
  })

databaseClient
 .sync()
 .then(startApplication)
 .catch(console.log)

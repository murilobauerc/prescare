const express = require('express')
const Sequelize = require('sequelize')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const PORT = process.env.PORT || 3000
const DB_NAME = 'prescare'
const DB_USER = 'postgres'
const DB_PASSWORD = 'prescare'
const DB_HOST = 'localhost'
const user = require('./public/js/user')
const farmacia = require('./public/js/farmacia')
const app = express()


const startApplication = () => {
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => {
      res.render('pages/home')
    })
    .get('/about', (req, res) => {
      res.render('pages/about', { usuario: user })
    })
    .get('/farmaceutica', (req, res) => {
      res.render('pages/farmaceutica', {farmacia : farmacia})
    })
    .get('/edit', (req, res) => {
      res.render('pages/edit', {farmacia : farmacia})
    })


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

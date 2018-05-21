const exAcolhido = require ('../../public/js/acolhido')

const acolhido = () => (req, res) => res.render('pages/info' , { acolhido: exAcolhido })

module.exports = acolhido 
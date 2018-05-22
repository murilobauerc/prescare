const acolhido = require('../routes/acolhido')
const farmaceutica =  require ('../routes/farmaceutica')
const home = require ('../routes/home')
const farmaceutica = require ('../../public/js/farmaceutica')
const tabelaFarmaceutica = require('../../public/js/tabelaFarmaceutica')
const about =  require ('../../public/js/user')


const allRoutes = {
    acolhido: acolhido(),
    farmaceutica : farmaceutica(farmaceutica),
    prescricaoAtualizada : prescricaoAtualizada(tabelaFarmaceutica),
    about : about(user),
    home: home(),
}

module.exports = allRoutes
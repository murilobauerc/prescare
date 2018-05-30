const Sequelize = require('sequelize')

const farmaceutica = (Prescricao, Medicamento) => (req, res) => {
  return Prescricao.findAll({
    where: {
      id: req.params.id
    },
    include: [Medicamento]
  }).then(prescricao => {
    console.log(prescricao)    
    res.render('pages/farmaceutica', { prescricaoFarmacia : prescricao.getMedicamento, prescricao : prescricao})
  })
}

module.exports = farmaceutica

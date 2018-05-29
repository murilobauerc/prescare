const Sequelize = require('sequelize')

const farmaceutica = (Prescricao, Medicamento) => (req, res) => {
  return Prescricao.findAll({
    where: {
      id: req.params.id
    },
    include: [Medicamento]
  }).then(perscricao => {
    console.log(prescricao)
    res.render('pages/farmaceutica', { prescricaoFarmacia : farmacia.medicamentos, prescricao : prescricao})
  })
}

module.exports = farmaceutica

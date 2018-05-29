const Sequelize = require('sequelize')

const historicoPrescricao = (Prescricao, Acolhido) => (req, res) => { 
  return Acolhido.find({
    where: {
      id: req.params.id
    },
    include: [ Prescricao ]
  }).then(acolhido => {
    console.log(acolhido)
    res.render('pages/historico-prescricao',{historicoPrescricoes : acolhido.prescricaos, acolhido : acolhido})
  })
}

module.exports = historicoPrescricao


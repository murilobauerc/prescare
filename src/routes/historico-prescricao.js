
const historicoPrescricao = (Prescricao, Acolhido) => (req, res) => { 
  console.log("entrou historico-prescricao.js")  
  return Prescricao
    .findAll({
      include: [{
        model: Acolhido
      }]
    })
    .then(historicoPrescricoes => {
    res.render('pages/historico-prescricao', { historicoPrescricoes })
  })
    .catch(console.log)   
}

module.exports = historicoPrescricao


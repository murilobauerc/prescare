
const historicoPrescricao = (Prescricao) => (req, res) => { 
    return Prescricao
        .findAll()
        .then(historicoPrescricoes => {
          res.render('pages/historico-prescricao', { historicoPrescricoes })
        })
      .catch(console.log)   
}

module.exports = historicoPrescricao

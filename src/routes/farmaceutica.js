const farmaceutica = (Prescricao) => (req, res) => { 
    return Prescricao
        .findAll()
        .then(farmacia => {
          res.render('pages/farmaceutica', { farmacia })
        })
      .catch(console.log)   
}

module.exports = farmaceutica

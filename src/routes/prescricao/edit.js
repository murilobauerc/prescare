module.exports = (Prescricao)  => (req, res) => {

  Prescricao.findOne({
    where: {
      id: req.params.prescricao_id
    }
  })
  .then(prescricao => {
    res.render('pages/editarPrescricao', { 
      prescricao, 
      acolhidoId: req.params.acolhido_id, 
      updateUrl: req.originalUrl 
    })
  })
}

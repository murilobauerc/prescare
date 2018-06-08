module.exports = Prescricao => (req, res) => {
  Prescricao.destroy({
    where: {
      id: req.params.prescricao_id
    }
  })
  .then(prescricao => { 
    if(!prescricao) res.render('/404')

    res.render('pages/editarPrescricao', { prescricao, updateUrl: req.originalUrl })
    })
}
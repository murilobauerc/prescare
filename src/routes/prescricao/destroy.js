module.exports = Prescricao => (req, res) => {
  Prescricao.destroy({
    where: {
      id: req.params.prescricao_id
    }
  }).then(() => { 
    res.render('pages/editarPrescricao', { prescricao, updateUrl: req.originalUrl })
    })
}

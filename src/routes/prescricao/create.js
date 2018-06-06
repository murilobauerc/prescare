module.exports = Prescricao => (req, res) => {
  Prescricao.find({
  }).then(prescricao => {
    if (!prescricao){
    res.redirect(req.originalUrl + '/' + prescricao.id + '/edit')
  }
  else{
    res.render('/:prescricao_id')
  }
  })
}
module.exports = Dieta => (req, res) => {
  console.log(req.params);
  
    Dieta.findOne({
      where: {
        id: req.params.dieta_id
      }
    }).then(dieta => {
      if(!dieta) res.render('/404')
  
      res.render('pages/editarDieta', { 
        acolhidoId: req.params.acolhido_id,
        prescricaoId: req.params.prescricao_id,
        dieta, 
        updateUrl: req.originalUrl
      })
    })
  }
  
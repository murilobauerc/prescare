const pesquisar = (acolhido) => (req, res) => {
    return acolhido
    .findAll({
        where: { nome: req.params.nome }
    })
    .then(acolhidos => {
            res.render('pages/pesquisaAcolhidos', { acolhidos })
        })
    .catch(console.log)
}

module.exports = pesquisar
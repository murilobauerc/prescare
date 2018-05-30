const acolhidos = (acolhido) => (req, res) => {
    return acolhido
        .find({
            where: { id: req.params.id }
        })
        .then(acolhidos => {    
            res.render('pages/acolhido',  { acolhidos : acolhidos })
        })
        .catch(console.log)  
}

module.exports = acolhidos
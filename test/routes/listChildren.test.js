const listChildren = require("../../src/routes/listChildren")

describe('Quando acesso ListChildren', () => {
    it('Deve mostrar uma lista de nomes', (done) => {
        const Acolhido = {
            findAll: jest.fn()
        }
        const req = {}
        const res = {render : jest.fn()}
        const acolhidos = [{ nome: 'Leo' }, { nome: 'Luna' } ]
        Acolhido.findAll.mockResolvedValue(acolhidos)
        
        return listChildren(Acolhido)(req,res)
            .then(() => expect(res.render).toBeCalledWith('pages/listChildren', { acolhidos }))
            .then(done)
            .catch(done)
    })
})
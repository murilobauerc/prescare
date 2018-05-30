const pesquisaAcolhidosRoute = require("../../src/routes/pesquisaAcolhidos")

describe('Quando acesso pesquisaAcolhidos', () => {
    it('Deve mostrar a pagina de pesquisa dos acolhidos', (done) => {
        const acolhido = {
            findAll: jest.fn()
        }
       
        const req = { params: { nome: 'Leo' } }
        const res = { render: jest.fn() }
        const acolhidos = [{ nome: 'Leo' }, { id: '1' }, { idade: 'Luna' }, { peso: 'Luna' }, { alergias: 'Luna' }, { via_alimentacao: 'Luna' }]
        acolhido.findAll.mockResolvedValue(acolhidos)

        return pesquisaAcolhidosRoute(acolhido)(req, res)
        .then(() => expect(acolhido.findAll).toBeCalledWith( {'where': {'nome': 'Leo'}}))
        .then(() => expect(res.render).toBeCalledWith('pages/pesquisaAcolhidos', { acolhidos }))
        .then(done)
        .catch(done)
    })
})
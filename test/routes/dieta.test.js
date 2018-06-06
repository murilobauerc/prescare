const dietaRoute = require("../../src/routes/dieta/get")

describe('Quando acesso dieta', () => {
    it('Deve mostrar pagina com informações do dieta', (done) => {
        const Dieta = {
            findOne: jest.fn()
        }
       
        const req = { params: { dieta_id: 1 } }
        const res = { render: jest.fn() }
        const dieta = { 
            id: 1,
            intervalo: '8h-8h',
            tipo: 'continuo'
        }

        Dieta.findOne.mockResolvedValue(dieta);

        return dietaRoute(Dieta)(req, res)
        .then(() => expect(Dieta.findOne).toBeCalledWith( {'where': {'id': req.params.dieta_id }}))
        .then(() => expect(res.render).toBeCalledWith('pages/editarDieta', { dieta }))
        .then(done)
        .catch(done)
    })
})
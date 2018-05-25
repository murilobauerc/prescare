const historicoPrescricao = require("../../src/routes/historico-prescricao")

describe('Quando acesso Historico Prescrição', () => {
    it('Deve mostrar uma lista de prescrições', (done) => {
        const Prescricao = {
            findAll: jest.fn()
        }
        const req = {}
        const res = {render : jest.fn()}
        const prescricoes = [{ intervalo: '1h' }, { intervalo: '2h' } ]
        Prescricao.findAll.mockResolvedValue(prescricoes)
        
        return historicoPrescricao(Prescricao)(req,res)
            .then(() => expect(res.render).toBeCalledWith('pages/historico-prescricao', { prescricoes }))
            .then(done)
            .catch(done)
    })
})
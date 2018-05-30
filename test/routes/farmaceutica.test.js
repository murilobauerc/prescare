const prescr = require("../../src/routes/farmaceutica")

describe('Quando acesso a pagina da farmaceutica', () => {
    it('Deve mostrar uma prescricao com complementacoes', (done) => {
        const Prescricao = {
            where: 1,
            id:1,
            findAll:jest.fn()
        }
        const req = {params:{id:1}}
        const res = {render : jest.fn()}
        const prescricao = [{ nomeMedicamento: 'Paracetamal' }, { via: 'oral' } ]
        
        Prescricao.findAll.mockResolvedValue(prescricao)

        return prescr(Prescricao)(req,res)
        .then(()=> expect(res.render).toBeCalledWith('pages/farmaceutica',{prescricao}))
        .then(done)
        .catch(done)
    })
})

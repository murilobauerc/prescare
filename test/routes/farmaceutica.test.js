const prescr = require("../../src/routes/farmaceutica")

describe('Quando acesso a pagina da farmaceutica', () => {
    it('Deve mostrar uma prescricao com complementacoes', () => {
        const Prescricao = {
            findAll:jest.fn()
        }
        const req = {}
        const res = {render : jest.fn()}
        const farmacia = [{ nomeMedicamento: 'Busonide' }, { via: 'Oral' } ]
        
        Prescricao.findAll.mockResolvedValue(farmacia)

        return prescr(Prescricao)(req,res)
        .then(()=> expect(res.render).toBeCalledWith('pages/farmaceutica',{farmacia}))
        .then(done)
        .catch(done)
    })
})

// {
//     medicamentos: 'Busonide 100mg',
//     via: 'Oral',
//     intervalo: '16-16h',
//     formaFarmaceutica: 'gotas',
//     horario:'8h 16h',
//     lote: '1234',
//     validade: '03/12/2019',
//     dispensacao: false,
// }
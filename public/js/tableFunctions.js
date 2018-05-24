window.addEventListener('load', () => {
    let tables = document.getElementsByClassName('js-table-container')


    for (let table of tables) {
        let tableObj = Table(table)
        tableObj.initializeButton()
        table.table = tableObj
    }

})


let Table = (tableContainer) => ({
    tableContainer: tableContainer,
    tableBody: tableContainer.getElementsByTagName('tbody').item(0),
    novoElForm: tableContainer.getElementsByClassName('js-novo-elemento').item(0),

    appendRow(row) {
        this.tableBody.insertBefore(row, this.novoElForm)
    },

    initializeButton() {
        tableContainer.getElementsByClassName('js-add').item(0).addEventListener('click', () => {
            let novoMedicamento = this.novoElForm.querySelector('.js-novo-medicamento').value
            let novoVia = this.novoElForm.querySelector('.js-novo-via').value
            let novoIntervalo = this.novoElForm.querySelector('.js-novo-intervalo').value
            let novoFormaFarmaceutica = this.novoElForm.querySelector('.js-novo-forma-farmaceutica').value
            let novoObservacao = this.novoElForm.querySelector('.js-novo-observacao').value
            let novoDataDePrescricao = this.novoElForm.querySelector('.js-novo-data-de-prescricao').value
            this.appendRow(this.createRow(novoMedicamento.toUpperCase(), novoVia.toUpperCase(), novoIntervalo.toUpperCase(), novoFormaFarmaceutica.toUpperCase(), novoObservacao.toUpperCase(), novoDataDePrescricao.toUpperCase()))

            const clearAllInputs = (inputList) => inputList.forEach(input => input.value = "")

            const inputsByClassName = (className) => () => [...document.querySelectorAll(className)]

            const clearMed = inputsByClassName('.js-novo-medicamento');
            const clearVia = inputsByClassName('.js-novo-via');
            const clearInter = inputsByClassName('.js-novo-intervalo');
            const clearForma = inputsByClassName('.js-novo-forma-farmaceutica');
            const clearObs = inputsByClassName('.js-novo-observacao');
            const clearData = inputsByClassName('.js-novo-data-de-prescricao');

            [clearMed(), clearVia(), clearInter(), clearForma(), clearObs(), clearData()]
                .forEach(clearAllInputs)
        })
    },

    createRow(novoMedicamento, novoVia, novoIntervalo, novoFormaFarmaceutica, novoObservacao, novoDataDePrescricao, ) {
        let row = document.createElement('tr')

        for (let arg of arguments) {
            let td = document.createElement('td')
            td.innerHTML = arg
            row.appendChild(td)
        }

        return row
    },


})
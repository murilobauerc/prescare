window.addEventListener('load', () => {
    let tables = document.getElementsByClassName('js-table-container')

    for (let table of tables) {
        let tableObj
        if (table.getElementsByClassName('js-novo-elemento-pomada').item(0)) {
            tableObj = Table(table)
            tableObj.initializeButtonPomada()
        } else {
            tableObj = Table(table)
            tableObj.initializeButton()
        }
        table.table = tableObj
    }

})

let Table = (tableContainer) => ({
    tableContainer: tableContainer,
    tableBody: tableContainer.getElementsByTagName('tbody').item(0),
    novoElForm: tableContainer.getElementsByClassName('js-novo-elemento').item(0),
    novoElFormPom: tableContainer.getElementsByClassName('js-novo-elemento-pomada').item(0),

    appendRow(row) {
        this.tableBody.insertBefore(row, this.novoElForm)
    },
    appendRowPom(row) {
        this.tableBody.insertBefore(row, this.novoElFormPom)
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
    createRowPom(novoMedicamento, novoLocal, novoIntervalo, novoObservacao, novoDataDePrescricao, ) {
        let row = document.createElement('tr')

        for (let arg of arguments) {
            let td = document.createElement('td')
            td.innerHTML = arg
            row.appendChild(td)
        }

        return row
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
    initializeButtonPomada() {
        tableContainer.getElementsByClassName('js-add').item(0).addEventListener('click', () => {
        
            let novoMedicamento = this.novoElFormPom.querySelector('.js-novo-medicamento').value
            let novoLocal = this.novoElFormPom.querySelector('.js-novo-local').value
            let novoIntervalo = this.novoElFormPom.querySelector('.js-novo-intervalo').value
            let novoObservacao = this.novoElFormPom.querySelector('.js-novo-observacao').value
            let novoDataDePrescricao = this.novoElFormPom.querySelector('.js-novo-data-de-prescricao').value
            this.appendRowPom(this.createRowPom(novoMedicamento.toUpperCase(), novoLocal.toUpperCase(), novoIntervalo.toUpperCase(), novoObservacao.toUpperCase(), novoDataDePrescricao.toUpperCase()))

            const clearAllInputs = (inputList) => inputList.forEach(input => input.value = "")

            const inputsByClassName = (className) => () => [...document.querySelectorAll(className)]

            const clearMed = inputsByClassName('.js-novo-medicamento');
            const clearLocal = inputsByClassName('.js-novo-local');
            const clearInter = inputsByClassName('.js-novo-intervalo');
            const clearObs = inputsByClassName('.js-novo-observacao');
            const clearData = inputsByClassName('.js-novo-data-de-prescricao');

            [clearMed(), clearLocal(), clearInter(), clearObs(), clearData()]
                .forEach(clearAllInputs)
        })
    }

})
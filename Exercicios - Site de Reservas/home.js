const reservas = [
    { quarto: 123, cliente: 'Poliana Soeth', cpf: '123.156.156-08', periodo: '16/08/2023 - 31/08/2023' },
    { quarto: 456, cliente: 'Ian Wikipedia', cpf: '315.186.176-01', periodo: '15/08/2023 - 21/08/2023' },
    { quarto: 789, cliente: 'Sophia Biz', cpf: '859.156.146-03', periodo: '06/08/2023 - 19/08/2023' },
    { quarto: 101, cliente: 'Dev Disney', cpf: '165.116.132-09', periodo: '11/08/2023 - 28/08/2023' },
    { quarto: 210, cliente: 'Pamela Soeth', cpf: '654.132.876-99', periodo: '13/08/2023 - 29/08/2023' },
    { quarto: 211, cliente: 'Andrea Soeth', cpf: '183.745.635-58', periodo: '19/08/2023 - 31/08/2023' },
]

document.querySelector('#logout').onclick = () => location.href = "login.html"

// Função para gerar a tabela
function gerarTabela(reservas) {

    const tbody = document.querySelector('tbody')

    reservas.forEach(item => {
        // Criação da tabela
        const linha = document.createElement('tr')
        Object.values(item).forEach(value => {
            const td = document.createElement('td')
            td.textContent = value
            linha.appendChild(td)
        })
        // Criação do botão para deletar
        const td = document.createElement('td')
        const button = document.createElement('button')
        button.textContent = 'Deletar Reserva'
        button.onclick = function () { removerReserva(this) }
        td.appendChild(button)
        linha.appendChild(td)
        tbody.appendChild(linha);

    });

}
// Função para remover a reserva
function removerReserva(buttonClickEvent) {
    const indiceReserva = buttonClickEvent.parentNode.parentNode.rowIndex
    delete reservas[indiceReserva]
    document.getElementsByTagName('tr').item(indiceReserva).remove()

}

gerarTabela(reservas)
// Definir variável de vetor
let valores = []

function adicionar() {
    // Atribuir o valor do input txtnum à uma variável
    let num = Number(document.querySelector('#txtnum').value)

    // Definir variável para a tabela
    let tab = document.querySelector('#itabela')

    let res = document.querySelector('#res')

    // Verificar se o valor está entre 1 e 100 ou se já se encontra na lista
    if (num < 1 || num > 100 || valores.includes(num)) {
        // Caso sim, mostrar um alert 'Valor inválido ou já incluso'
        window.alert('Valor inválido ou já incluso')

    } else {
        // Caso não, incluir no array
        valores.push(num)
        let item = document.createElement('option')
        item.text = `O valor adicionado foi ${num}`
        tab.appendChild(item)
        document.querySelector('#txtnum').value = ''
         document.querySelector('#txtnum').focus()
    }
}


// Quando finalizar chamar o método 'finalizar()'
function finalizar() {
    if (valores.length == 0 ){
        window.alert('Adicione valores antes de finalizar')
    } else {
        // Colocar os valores do vetor em ordem crescente
        valores.sort()

        res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados</p>`

        res.innerHTML += `<p>O maior valor informado foi o ${valores[valores.length - 1]}</p>`

        res.innerHTML += `<p>O menor valor informado foi o ${valores[0]}</p>`

        // Calcular a soma dos valores do vetor
        let soma = 0
        for (let i = 0; i < valores.length; i++){
            soma += valores[i]
        }

        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`

        res.innerHTML += `<p>A média dos valores digitados é ${soma / valores.length}</p>`
    }
}
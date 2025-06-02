function tabuada(){
    // Capturar o input
    let numero = document.querySelector('#inumero')

    // Capturar a div de resultado
    let resultado = document.querySelector('#iresultado')

    // Convertê-lo para um valor inteiro
    let intNumero = Number(numero.value)

    // Verificar se o input é vazio e caso seja, mostrar um alert
    if (numero.value.length == 0) {
        window.alert('Por favor digite um número')
    } else {
        // Resetar o conteúdo da tabela antes de receber novos valores
        resultado.innerHTML = ''

        // Definir um loop da quantidade de vezes de acordo com o número digitado
        for (let i = 1; i <= 10; i++){
            // criar option no select
            let item = document.createElement('option')
            
            // Mostrar no resultado da tabuada
            item.text = `${intNumero} X ${i} = ${intNumero * i}`

            // Adicionar valor ao item
            item.value = `item${i}`

            // Incluir o option na tabela
            resultado.appendChild(item)
        }   
    }
}
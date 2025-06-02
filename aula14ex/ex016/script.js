function contar(){
    // Coleta dos inputs
    let inicio = document.querySelector('#iinicio')
    let fim = document.querySelector('#ifim')
    let passo = document.querySelector('#ipasso')
    let resultado = document.querySelector('#resultado')

    // Conversão das strings em valores inteiros
    let intInicio = Number(inicio.value)
    let intFim = Number(fim.value)
    let intPasso = Number(passo.value)

    // Verificação dos valores de inicio e fim se são iguais a zero ou vazios
    if (inicio.value.length == 0 || fim.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'
    } else {
        // Caso o valor do passo seja 0 ou vazio, convertê-lo em 1.
        if (passo.value.length == 0 || intPasso == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')

            intPasso = 1
        }
        resultado.innerHTML = 'Contando:<br>'

        if (intInicio < intFim){
            // Caso o valor seja crescente
            for (let i = intInicio; i <= intFim; i += intPasso) {
                resultado.innerHTML += `${i} &#x1F449 `
            }
        } else {
            // Caso o valor seja regressivo
            for (let i = intInicio; i >= intFim; i -= intPasso) {
                resultado.innerHTML += `${i} &#x1F449 `
            }
        }
        resultado.innerHTML += `&#x1F3F4`
        
    }
}
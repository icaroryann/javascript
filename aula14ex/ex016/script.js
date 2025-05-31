function contar(){
    let inicio = document.querySelector('#iinicio')
    let intInicio = Number(inicio.value)

    let fim = document.querySelector('#ifim').value
    let intFim = Number(fim)

    let passo = document.querySelector('#ipasso')
    let intPasso = parseInt(passo.value)

    let resultado = document.querySelector('#resultado')

    resultado.innerHTML = ''

    for (let i = intInicio; i <= intFim; i += intPasso) {
        if (i < intFim) {
            resultado.innerHTML += `${i} &#x1F449 `
        } else {
            resultado.innerHTML += i
        }
    }
}
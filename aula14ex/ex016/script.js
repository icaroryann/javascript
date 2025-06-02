function contar(){
    let inicio = document.querySelector('#iinicio')
    let intInicio = Number(inicio.value)

    let fim = document.querySelector('#ifim').value
    let intFim = Number(fim.value)

    let passo = document.querySelector('#ipasso')
    let intPasso = Number(passo.value)

    let resultado = document.querySelector('#resultado')

    resultado.innerHTML = 'Contando:<br>'

    if (intInicio == 0 || intFim == 0) {
        resultado.innerHTML = 'Impossível contar!'
    } else if (intPasso == 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        intPasso = 1
    } else {
        for (let i = intInicio; i <= intFim; i += intPasso) {
            resultado.innerHTML += `${i} &#x1F449 `
        }
        resultado.innerHTML += `&#x1F3F4`
    }
}
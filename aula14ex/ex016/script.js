let inicio = document.querySelector('#iinicio')
let intInicio = Number(inicio.value)

let fim = document.querySelector('#ifim').value
let intFim = Number(fim)

let passo = document.querySelector('#ipasso')
let intPasso = parseInt(passo.value)

let resultado = document.querySelector('#resultado')

function contar(){
    for (let i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
        resultado.innerHTML += i
    }
}
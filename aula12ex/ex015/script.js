function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#iano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados novamente.')
    } else if (fano.value.length < 1925) {
        window.alert('Talvez você tenha removido seu nome do livro da vida e da morte')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        res.innerHTML += `com ${idade} anos.`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', './imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './imagens/foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/foto-idoso-m.png')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', './imagens/foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './imagens/foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}
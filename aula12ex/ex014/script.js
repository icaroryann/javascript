function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        // MANHÃ
        img.src = 'fotomanha.png'
        document.body.style.background =' #f1dec0'
    } else if (hora < 18) {
        // TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#c06320'
    } else {
        // NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#2f395d'
    }
}
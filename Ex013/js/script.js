function carregar() {
    let msg = document.querySelector('div#msg');
    let foto = document.querySelector('img#imagem');
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        //Bom dia! 
        imagem.src = 'images/fotomanha.png';
        document.body.style.background = '#acbe92';
        msg.innerHTML += `<p>Bom dia!</p>`;
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde! 
        imagem.src = 'images/fototarde.png';
        document.body.style.background = '#ce966d';
        msg.innerHTML += `<p>Boa tarde!</p>`;
    } else {
        //Boa noite! 
        imagem.src = 'images/fotonoite.png';
        document.body.style.background = '#11699c';
        msg.innerHTML += `<p>Boa noite!</p>`;
    }
}
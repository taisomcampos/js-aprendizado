function carregar() {
    let data = new Date();
    let hora = 11 //data.getHours();
    let texto = document.querySelector('div#txt');
    let foto = document.querySelector('img#imagem');
    texto.innerHTML = `Agora são ${hora} hora(s)!`;
    if (hora >= 0 && hora <= 12) {
        texto.innerHTML += `<p>Bom dia!</p>`;
        imagem.src = 'images/fotomanha.png';
        document.body.style.background = '#acbe92';
    } else if (hora > 12 && hora <= 18) {
        texto.innerHTML += `<p>Boa tarde!</p>`;
        imagem.src = 'images/fototarde.png';
        document.body.style.background = '#ce966d';
    } else {
        texto.innerHTML += `<p>Boa noite</p>`;
        imagem.src = 'images/fotonoite.png';
        document.body.style.background = '#11699c';
    }
} 
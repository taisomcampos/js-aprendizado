function carregar() {
    let texto = document.querySelector('div#texto');
    let imagem = document.querySelector('img#imagem');
    let data = new Date();
    let hora = data.getHours();
    texto.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora <= 12) {
        document.body.style.background = '#acbe92';
        texto.innerHTML += `<p>Bom dia!</p>`
        texto.style.color = '#acbe92';
        imagem.src = 'images/fotomanha.png';
    } else if (hora > 12 && hora <= 18) {
        document.body.style.background = '#ce966d';
        texto.innerHTML += `<p>Boa tarde!</p>`;
        texto.style.color = '#ce966d';
        imagem.src = 'images/fototarde.png';
    } else {
        document.body.style.background = '#11699c';
        texto.innerHTML += `<p>Boa noite!</p>`;
        texto.style.color = '#11699c'
        imagem.src = 'images/fotonoite.png'
    }
}
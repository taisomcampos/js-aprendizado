function carregar() {
    let agora = new Date();
    let hora = agora.getHours();
    let minutos = agora.getMinutes();
    let texto = document.querySelector('div#txt');
    let foto = document.querySelector('img#fto');
    texto.innerHTML = `Agora são <strong>${hora}:${minutos}</strong>!`;
    if (hora >= 0 && hora <= 12) {
        texto.innerHTML += `<p><strong>Bom dia!</strong></p>`;
        document.body.style.background = 'green'
        foto.src = '/Ex013 (Hora do Dia)/images/fotomanha.png';
    } else if (hora > 12 && hora <= 18) {
        texto.innerHTML += `<p><strong>Boa tarde!</strong></p>`;
        document.body.style.background = 'chocolate';
        foto.src = '/Ex013 (Hora do Dia)/images/fototarde.png';
    } else {
        texto.innerHTML += `<strong><p>Boa noite!</strong></p>`;
        document.body.style.background = 'darkblue';
        foto.src = '/Ex013 (Hora do Dia)/images/fotonoite.png';
    }
}
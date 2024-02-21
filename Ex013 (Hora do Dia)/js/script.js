function carregar() {
    let agora = new Date();
    let hora = agora.getHours();
    let minuto = agora.getMinutes();
    let texto = document.querySelector('div#txt');
    let foto = document.querySelector('img#fto');
    texto.innerHTML = `São exatamente ${hora}:${minuto}!`;
    if (hora >= 0 && hora <= 12) {
        texto.innerHTML += `<p>Tenha uma <strong>bom dia</strong>!</p>`;
        foto.src = '/Ex013 (Hora do Dia)/images/fotomanha.png';
        document.body.style.background = 'green';
    } else if (hora > 12 && hora <= 18) {
        texto.innerHTML += `<p>Tenha uma <strong>boa tarde</strong>!</p>`;
        foto.src = '/Ex013 (Hora do Dia)/images/fototarde.png';
        document.body.style.background = 'chocolate';
    } else {
        texto.innerHTML += `<p>Tenha uma <strong>boa noite</strong>!</p>`;
        foto.src = '/Ex013 (Hora do Dia)/images/fotonoite.png';
        document.body.style.background = 'darkblue';
    }
}
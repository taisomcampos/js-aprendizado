function diaSemana() {
    let res = document.querySelector('div#res');
    let dia = new Date();
    let diaSemana = dia.getDay()
    res.innerHTML = `<p>Hoje é:`;
    switch (diaSemana) {
        case 0:
            res.innerHTML += `<p>Domingo</p>`;
            break
        case 1:
            res.innerHTML += `<p>Segunda-feira</p>`;
            break
        case 2:s
            res.innerHTML += `<p>Terça-feira</p>`;
            break
        case 3:
            res.innerHTML += `<p>Quarta-feira</p>`;
            break
        case 4:
            res.innerHTML += `<p>Quinta-feira</p>`;
            break
        case 5:
            res.innerHTML += `<p>Sexta-feira</p>`;
            break
        case 6:
            res.innerHTML += `<p>Sábado</p>`;
            break
        default:
            res.innerHTML += `<p>[ERRO] Dia inválido!</p>`;
            break
    }
} // Isso é uma condição múltipla
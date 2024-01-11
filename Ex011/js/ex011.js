function hora() {
    let res = document.querySelector('div#res');
    let agora = new Date();
    let horaAtual = agora.getHours();
    res.innerHTML = `<p>Agora é/são <strong>${horaAtual} hora(s).</strong></p>`;
    if (horaAtual < 5) {
        res.innerHTML += `<p>Boa madrugada!</p>`;
    } else if (horaAtual < 12) {
        res.innerHTML += `<p>Bom dia!</p>`;
    } else if (horaAtual <= 18) {
        res.innerHTML += `<p>Boa tarde!</p>`;
    } else {
        res.innerHTML += `<p>Boa noite!</p>`;
    }
}
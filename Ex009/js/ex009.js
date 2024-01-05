function verificar() {
    let país = document.querySelector('input#país');
    let res = document.querySelector('div#res');
    res.innerHTML = `<p>Você é do(a) <strong>${país.value}</strong>.</p>`;
    if (país.value == 'Brasil') {
        res.innerHTML += `<p>Você é <strong>BRASILEIRO!</strong></p>`;
    } else {
        res.innerHTML += `<p>Você é <strong>ESTRANGEIRO!</strong></p>`;
    } // Isso é uma condição composta.
}
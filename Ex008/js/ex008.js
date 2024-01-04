function verificar() {
    let vel = document.querySelector('input#vel');
    let res = document.querySelector('div#res');
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel.value}km/h</strong>.</p>`;
    if (vel.value > 60) {
        res.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade.</p>`;
    } // Isso é uma condição simples.
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`;
}
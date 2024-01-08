// Se a idade for menor que 16 não vota
// Se for menor que 18, automaticamente é >= 16 e portanto o voto é opcional
// Se não, automaticamnete já é >= 18 e portanto o voto é obrigatório
function verificar() {
    let idade = document.querySelector('input#idade');
    let res = document.querySelector('div#res');
    res.innerHTML = `<p>Você tem <strong>${idade.value} </strong> anos.</p>`;
    if (idade.value < 16) {
        res.innerHTML += `<p><strong>Não vota!</strong></p>`;
    } else if (idade.value < 18 || idade.value > 65) {
        res.innerHTML += `<p><strong>Voto opcional!</strong></p>`;
    } else {
        res.innerHTML += `<p><strong>Voto obrigatório!</strong></p>`;
    }
}
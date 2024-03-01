function contar() {
    let inicio = document.querySelector('input#txti');
    let fim = document.querySelector('input#txtf');
    let passo = document.querySelector('input#txtp');
    let resultado = document.querySelector('div#res');
    resultado.innerHTML = `Contando...`;
    if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        alert('Digite um número válido!');
    } else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (i < f) {
            for (count = i; count <= f; count += p) {
                //contagem crescente
                resultado.innerHTML += `${count}👉`;
            }
        } else {
            for (count = i; count >= f; count -= p) {
                //contagem decrescente
                resultado.innerHTML += `${count}👉`;
            }
        }
        resultado.innerHTML += `🛑`;
    }
}
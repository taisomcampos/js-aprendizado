function contar() {
    let inicio = document.querySelector('input#txti');
    let fim = document.querySelector('input#txtf');
    let passo = document.querySelector('input#txtp');
    let texto = document.querySelector('div#res');
    if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        alert('[ERRO] Digite um número válido!');
    } else {
        texto.innerHTML = `Contando... `;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (i < f) {
            //contagem crescente
            for (contar = i; contar < f; contar += p) {
                texto.innerHTML += `${contar}👉 `;
            } 
        } else {
            //contagem decrescente
            for (contar = i; contar > f; contar -= p) {
                texto.innerHTML += `${contar}👉 `;
            }
        }
        texto.innerHTML += `🛑`
    }
}
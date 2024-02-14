function contar() {
    let inicio = document.querySelector('input#txti');
    let fim = document.querySelector('input#txtf');
    let passo = document.querySelector('input#txtp');
    let texto = document.querySelector('div#res');
    if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        alert(`[ERRO] Faltam dados!`);
    } else {
        texto.innerHTML = `Contando... `;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (i < f) {
            // contagem crescente
            for (let cont = i; cont <= f; cont += p){
                texto.innerHTML += `${cont} `;
            } 
        } else {
            // contagem decrescente
            for (let cont = i; cont >= f; cont -= p) {
                texto.innerHTML += `${cont} `;
            }  
        }
    }
}
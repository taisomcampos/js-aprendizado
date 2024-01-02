function numero() {
    let num = Number(prompt('Digite um número inteiro qualquer:'));
    let antecessor = num - 1;
    let sucessor = num + 1;
    alert(`Antes de ${num}, temos ${antecessor}. Depois de ${num}, temos ${sucessor}.`);
}
// Aqui eu já comecei a usar 'let' por conta própria, pois já tinha lido na documentaçõa que era o mais recomandado a se fazer.
// Ainda não sei o pq, mas o querySelector não funciona se coloco em todos os elementos.
function somar() {
    let tn1 = document.getElementById('txtn1');
    let tn2 = document.getElementById('txtn2');
    let res = document.getElementById('res');
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let soma = n1 + n2;
    res.innerHTML = `A soma entre <strong>${n1}</strong> e <strong>${n2}</strong> é igual a <strong>${soma}</strong>.`;
}
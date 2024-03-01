function calcular() {
    let numero = document.querySelector('input#txtn');
    let tabuada = document.querySelector('select#tab');
    if (numero.value == '') {
        alert('Digite um número válido!');
    } else {
        let n = Number(numero.value);
        let count = 1;
        tabuada.innerHTML = '';
        while (count <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${count} = ${n * count}`;
            tabuada.appendChild(item);
            count++;
        }
    }
}
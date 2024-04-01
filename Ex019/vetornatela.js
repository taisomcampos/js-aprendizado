let valor = [5, 3, 6, 4];
valor.push(1, 2);
valor.sort();
console.log(valor);

for (let pos in valor) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}.`);
}
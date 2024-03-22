let valor = ['Maria', 'Eduardo', 'Michele', 'Francisca', 'Carlos'];
valor.push(1, 7);
valor.sort()
console.log(valor);
for (let pos in valor) {
    console.log(`A posição ${pos} tem o ${valor[pos]}.`);
}
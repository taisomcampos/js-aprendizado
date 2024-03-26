let valor = [4, 2, 5, 3];
valor.push(1, 6);
valor.sort()
console.log(valor);
for (let pos in valor) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}.`)
}
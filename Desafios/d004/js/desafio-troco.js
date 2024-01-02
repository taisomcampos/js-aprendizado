function comprar() {
    let produto = prompt('Que produto você está comprando?');
    let preço = Number.parseFloat(prompt(`Quando custa o ${produto} que você está comprando?`));
    let valor = Number.parseFloat(prompt(`Qual foi o valor que você deu para pagar o ${produto}?`));
    let troco = valor - preço;
    alert(`Você comprou o ${produto} que custa R$ ${preço},00. Deu R$ ${valor},00 em dinheiro e vai receber R$ ${troco},00 de troco. Volte sempre!`);
}
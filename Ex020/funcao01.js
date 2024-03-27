function parimpar(n) { //(n) é o parâmetro
    if (n % 2 == 0) { //nesse caso a condição é a ação
        return 'Par!';
    } else {
        return 'Ímpar!'; //ímpar é o retorno
    }
}

/*
let res = parimpar(4);
console.log(res)
*/
console.log(parimpar(45)); //parimpar é a chamada
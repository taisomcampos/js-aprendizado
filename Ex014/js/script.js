function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let anoNascimento = document.querySelector('input#anoNascimento');
    let resutado = document.querySelector('div#resultado');
    if (anoNascimento.value == 0 || Number(anoNascimento.value) > ano) {
        alert('[ERRO] Digite uma data válida!')
    } else {
        let sexo = document.getElementsByName('sexo');
        let idade = ano - Number(anoNascimento.value);
        let genero = '';
        if (sexo[0].checked) {
            genero = 'homem';
        } else {
            genero = 'mulher';
        }
        resutado.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    }
}
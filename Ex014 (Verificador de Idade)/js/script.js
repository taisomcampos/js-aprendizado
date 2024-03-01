function verificar() {
    let agora = new Date();
    let ano = agora.getFullYear();
    let anoNascimento = document.querySelector('input#txtano');
    let resultado = document.querySelector('div#res');
    if (anoNascimento.value == 0 || anoNascimento.value > ano) {
        alert('[ERRO!] Digite um número válido!');
    } else {
        let sexo = document.getElementsByName('sxo');
        let idade = ano - anoNascimento.value;
        let genero = '';
        let foto = document.createElement('img');
        foto.setAttribute('id', 'Foto do meu documento');
        if (sexo[0].checked) {
            genero = 'homem';
            if (idade >= 0 && idade <= 12) {
                //crianca
                foto.setAttribute('src', '/Ex014 (Verificador de Idade)/images/crianca-m.png');
            } else if (idade < 21) {
                //jovem
                foto.setAttribute('src', '/Ex014 (Verificador de Idade)/images/jovem-m.png');
            } else if (idade < 50){
                //adulto
                foto.setAttribute('src', '/Ex014 (Verificador de Idade)/images/adulto-m.png');
            } else {
                //idoso
                foto.setAttribute('src', '/Ex014 (Verificador de Idade)/images/idoso-m.png');
            }
        } else {
            genero = 'mulher';
            if (idade >= 0 && idade <= 12) {
                //crianca
                foto.setAttribute('src', '/Ex014 (Verificador de Idade)/images/crianca-f.png');
            } else if (idade < 21) {
                //jovem
                foto.setAttribute('src', '/Ex014 (Verificador de Idade)/images/jovem-f.png');
            } else if (idade < 50){
                //adulto
                foto.setAttribute('src', '/Ex014 (Verificador de Idade)/images/adulto-f.png');
            } else {
                //idoso
                foto.setAttribute('src', '/Ex014 (Verificador de Idade)/images/idoso-f.png');
            }
        }
        resultado.innerHTML = `Detectamos <strong>${genero.toUpperCase()}</strong> de <strong>${idade}</strong> ano(s).`;
        resultado.style.textAlign = 'center';
        resultado.appendChild(foto)
    }
}
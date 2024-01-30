function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let anoNascimento = document.querySelector('input#nasc');
    let resultado = document.querySelector('div#res');
    if (anoNascimento.value == 0 || anoNascimento.value > ano) {
        alert('[ERRO] Digite uma data válida!')
    } else {
        let sexo = document.getElementsByName('sex');
        let idade = ano - anoNascimento.value;
        let genero = '';
        let imagem = document.createElement('img');
        imagem.setAttribute('id', 'Foto do meu docucumento');
        if (sexo[0].checked) {
            genero = 'homem';
            if (idade > 0 && idade < 10) {
                // Criança
                imagem.setAttribute('src', 'images/crianca-m.png');
            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', 'images/jovem-m.png');
            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', 'images/adulto-m.png')
            } else {
                // Idoso
                imagem.setAttribute('src', 'images/idoso-m.png');
            }
        } else {
            genero = 'mulher';
            if (idade > 0 && idade < 10) {
                // Criança
                imagem.setAttribute('src', 'images/crianca-f.png');
            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', 'images/jovem-f.png');
            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', 'images/adulto-f.png')
            } else {
                // Idoso
                imagem.setAttribute('src', 'images/idoso-f.png');
            }
        }
        resultado.innerHTML = `Detectamos <strong>${genero.toUpperCase()}</strong> de <strong>${idade} ano(s)</strong>.`
        resultado.style.textAlign = 'center';
        resultado.appendChild(imagem);
    }
}
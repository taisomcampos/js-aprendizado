function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let anoNascimento = document.querySelector('input#anoNascimento');
    let resultado = document.querySelector('div#resultado');
    if (anoNascimento.value == 0 || Number(anoNascimento.value) > ano) {
        alert('[ERRO] Digite uma data válida!');
    } else {
        let sexo = document.getElementsByName('sexo');
        let idade = ano - Number(anoNascimento.value);
        let genero = '';
        let imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto');
        if (sexo[0].checked) {
            genero = 'homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                imagem.setAttribute('src', 'images/foto-crianca-masculino.png');
            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', 'images/foto-jovem-masculino.png')
            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', 'images/foto-adulto-masculino.png');
            } else {
                // Idoso
                imagem.setAttribute('src', 'images/foto-idoso-masculino.png');
            }
        } else {
            genero = 'mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                imagem.setAttribute('src', 'images/foto-crianca-feminino.png');
            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', 'images/foto-jovem-feminino.png');
            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', 'images/foto-adulto-feminino.png');
            } else {
                // Idoso
                imagem.setAttribute('src', 'images/foto-idoso-feminino.png');
            }
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} de ${idade} ano(s).`;
        resultado.appendChild(imagem);
    }
}
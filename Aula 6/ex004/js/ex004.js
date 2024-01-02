var nome = window.prompt('Digite o seu nome:');
document.write(`Seu nome tem <strong>${nome.length}</strong> letras.</br>`);
document.write(`Seu nome, em letras maiúsculas, seria: <strong>${nome.toUpperCase()}</strong>.</br>`);
document.write(`Seu nome, em letras minúsculas, seria: <strong>${nome.toLowerCase()}</strong>.`);
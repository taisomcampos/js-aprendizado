var area = document.querySelector('div#area');
function entrar() {
    area.innerText = 'Entrou!';
}
function clicar() {
    area.innerHTML = '<strong>CLICOU!</strong>';
    area.style.background = 'red';
}
function desclicar() {
    area.innerText = 'Entrou!';
    area.style.background = 'green';
}
function sair() {
    area.innerText = 'Clique aqui!';
    area.style.background = 'green';
}
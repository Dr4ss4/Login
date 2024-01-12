const container = document.getElementById('container');
const registerBtn = document.getElementById('registrar');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function exibirMensagem() {
    alert("Parabéns, você acessou nosso site");
}
document.getElementById("entrar-bnt").addEventListener("click", exibirMensagem);

function exibirMensagem() {
    alert("Parabéns, você se cadastrou no nosso site");
}
document.getElementById("inscricao-bnt").addEventListener("click", exibirMensagem);

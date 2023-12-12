const campoSenha = document.querySelector("#senha");
const botaoMostrarSenha = document.querySelector("#botaoMostrarSenha");
const legenda = document.querySelector(".legenda");

botaoMostrarSenha.addEventListener("click", function(){
    const estadoAtualDoCampoDeSenha = campoSenha.getAttribute("type") === "password" ? "text" : "password"
    
    campoSenha.setAttribute("type", estadoAtualDoCampoDeSenha);

    legenda.innerHTML = estadoAtualDoCampoDeSenha === "password" ? "Mostrar Senha" : "Ocultar";
});
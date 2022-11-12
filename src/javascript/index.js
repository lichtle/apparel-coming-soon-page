let input = document.querySelector(".email-input");
let iconeErro = document.querySelector(".icone-erro");
let mensagemErro = document.querySelector(".mensagem-erro");
let botao = document.querySelector(".send-btn");

botao.addEventListener("click", () => {
  if (input.value === "") {
    input.classList.add("invalid-email");
    iconeErro.classList.add("mostrar");
    mensagemErro.classList.add("mostrar");
  } else {
    input.classList.remove("invalid-email");
    iconeErro.classList.remove("mostrar");
    mensagemErro.classList.remove("mostrar");
  }
});

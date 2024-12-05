// Bara de navegaçao mobile
const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click",() =>{
    header.classList.toggle("show-mobile-menu");
});
// Toggle Este método adiciona a classe "show-mobile-menu" ao 
// elemento "header" se ela não estiver presente, e a remove se ela estiver. 
closeMenuBtn.addEventListener("click", () => 
    menuBtn.click());

// Login e cadastro
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

// Função para exibir e fechar o modal de login
function openModal() {
  document.getElementById('modal').style.display = 'block'
}

// Função para fechar o modal de login
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Fecha o modal ao clicar fora do conteúdo
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
      fecharModal();
  }
};

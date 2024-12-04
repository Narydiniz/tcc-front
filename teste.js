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
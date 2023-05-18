// variaveis globais
let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
let GetThemeLight = JSON.parse(localStorage.getItem("PageLightTheme"));
let theme;
let lightTheme;

// seletores para o site
const menu = document.querySelector(".menu");
const ul = document.querySelector("ul");
const but = document.querySelector("button");
const claro = document.querySelector(".claro");
const escuro = document.querySelector(".escuro");
const logos1 = document.querySelector(".logos1");
const logos2 = document.querySelector(".logos2");
const links1 = document.querySelector(".links1");
const links2 = document.querySelector(".links2");
const Footer = document.querySelector("footer");


// aqui adicionamos quantas classes quisermos
// ao clicar no botão
const menuDark = ["darkMenu"];
const butDark = ["buttonDark"];

// condicionais para guardar as preferencias
if (GetTheme === "DARK") {
  darkAdd();
  localStorage.removeItem("PageLightTheme");
}
if (GetThemeLight === "LIGHT") {
  resetar();
  localStorage.removeItem("PageTheme");
}

// funções para padronizar os botões
function dark() {
  escuro.style.display = "none";
  claro.style.display = "block";
  logos1.style.display = "none"
  logos2.style.display = "none"
  links1.style.display = "block"
  links2.style.display = "block"
}

function light() {
  escuro.style.display = "block";
  claro.style.display = "none";
  logos1.style.display = "block"
  logos2.style.display = "block"
  links1.style.display = "none"
  links2.style.display = "none"
}

// funções para salvar  as preferencias

function darkAdd() {
  menu.classList.add("Dark");
  Footer.classList.add("dark-footer");
  ul.classList.add(...menuDark);
  claro.classList.add(...butDark);
  dark();
  theme = "DARK";
  localStorage.setItem("PageTheme", JSON.stringify(theme));
}

function resetar() {
  ul.classList.remove(...menuDark);
  but.classList.remove(...butDark);
  menu.classList.remove("Dark");
  Footer.classList.remove("dark-footer");
  light();
}

function darkRemove() {
  resetar();
  lightTheme = "LIGHT";
  localStorage.setItem("PageLightTheme", JSON.stringify(lightTheme));
}

// mudar tema definitivo
const mudarTema = () => darkAdd();

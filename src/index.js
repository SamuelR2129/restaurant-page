import "./style.css";
import createHome from "./components/home";
import render from "./components/functions/render";
import menu from "./components/menu";

createHome();

const menuButton = document.querySelector("#menu-link");
// const contactButton = document.querySelector("#contact-link");
// const aboutButton = document.querySelector("#about-link");

menuButton.addEventListener("click", () => {
  render();
  menu();
});

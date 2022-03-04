import "./style.css";
import createHome from "./components/home";
import render from "./components/functions/render";
import menu from "./components/menu";

menu();

const menuButton = document.querySelector("#menu-link");
// const contactButton = document.querySelector("#contact-link");
// const aboutButton = document.querySelector("#about-link");

menuButton.addEventListener("click", () => {
  render();
  menu();
});

//hover effect for cocktail info on menu page
const drinkImages = document.querySelector(".cocktail-box");

drinkImages.addEventListener("mouseover", (event) => {
  const textBox = document.querySelector(".text-box");
  if (event.target.className == "text-box") {
    textBox.style.display = "flex";
  }
});

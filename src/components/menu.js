import flowerImage from "./images/flowers.svg";

const menu = () => {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.className = "menu-banner";
  content.appendChild(container);

  const headingWrapper = document.createElement("div");
  headingWrapper.id = "heading-wrapper";
  container.appendChild(headingWrapper);

  const heading = document.createElement("h2");
  heading.className = "page-heading";
  heading.textContent = "MENU";
  headingWrapper.appendChild(heading);

  const flower = new Image();
  flower.id = "flower";
  flower.src = flowerImage;
  container.appendChild(flower);
};

export default menu;

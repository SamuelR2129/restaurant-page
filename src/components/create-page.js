import hand from "./images/hand.svg";

export default function printMe() {
  const pageContent = document.querySelector("#content");
  const greenLeatherCover = document.createElement("div");
  greenLeatherCover.className = "background-cover";
  pageContent.appendChild(greenLeatherCover);

  const mainTitle = document.createElement("h1");
  mainTitle.id = "bar-title";
  mainTitle.className = "main-font-color";
  mainTitle.textContent = "FABLE";
  greenLeatherCover.appendChild(mainTitle);

  const subTitle = document.createElement("h3");
  subTitle.id = "cocktail-bar";
  subTitle.className = "main-font-color";
  subTitle.textContent = "COCKTAIL BAR";
  greenLeatherCover.appendChild(subTitle);

  const handImage = new Image();
  handImage.id = "front-page-hand";
  handImage.src = hand;
  greenLeatherCover.appendChild(handImage);
}

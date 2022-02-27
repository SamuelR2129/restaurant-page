import flowerImage from "./images/flowers.svg";
import cocktail1 from "./images/cocktail-1.jpg";
import cocktail0 from "./images/cocktail-0.jpg";
import cocktail2 from "./images/cocktail-2.jpg";
import cocktail3 from "./images/cocktail-3.jpg";
import cocktail4 from "./images/cocktail-4.jpg";
import cocktail5 from "./images/cocktail-5.jpg";

const menu = () => {
  const images = [
    cocktail0,
    cocktail1,
    cocktail2,
    cocktail3,
    cocktail4,
    cocktail5,
  ];

  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.className = "menu-banner";
  content.appendChild(container);

  const headingWrapper = document.createElement("div");
  headingWrapper.id = "heading-wrapper";
  container.appendChild(headingWrapper);

  const heading = document.createElement("h2");
  heading.className = "page-heading main-font-color";
  heading.textContent = "MENU";
  headingWrapper.appendChild(heading);

  const flower = new Image();
  flower.id = "flower";
  flower.src = flowerImage;
  container.appendChild(flower);

  const drinksContainer = document.createElement("section");
  drinksContainer.id = "drinks-container";
  content.appendChild(drinksContainer);

  for (let i = 0; i < 6; ++i) {
    const cocktailBox = document.createElement("div");
    cocktailBox.className = "cocktail-box";

    const drinkImage = document.createElement("img");
    drinkImage.className = "drink-images";
    drinkImage.id = "cocktail" + i;
    drinkImage.src = images[i];

    const textBox = document.createElement("div");
    textBox.className = "text-box";

    const textHeading = document.createElement("h4");
    textHeading.classsName = "text-headings";
    textHeading.id = "text-heading-" + i;

    const textParagraph = document.createElement("p");
    textParagraph.className = "text-paragraphs";
    textParagraph.id = "text-paragraph-" + i;

    cocktailBox.appendChild(drinkImage);
    cocktailBox.appendChild(textBox);
    textBox.appendChild(textHeading);
    textBox.appendChild(textParagraph);
    drinksContainer.appendChild(cocktailBox);
  }

  document.getElementById("text-heading-0").textContent = "Vulcano Negroni";
};

export default menu;

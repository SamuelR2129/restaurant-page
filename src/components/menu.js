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
    textHeading.className = "text-headings";
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
  document.getElementById("text-paragraph-0").textContent =
    "Rum Santa Teresa 1796, Coconut, Campari, pandam leaves, beetroot vermouth, almond Nardini. Aperitif, bitter, earthy, aromatic. ";

  document.getElementById("text-heading-1").textContent = "Kriptonita";
  document.getElementById("text-paragraph-1").textContent =
    "Tanqueray Ten gin, riboflavin, electric liquor, grapefruit cordial, chocolate bitter and keffir lime essential oil. Electric, acid and sweet. ";

  document.getElementById("text-heading-2").textContent = "Tornado";
  document.getElementById("text-paragraph-2").textContent =
    "Grey Goose vodka, vermouth Mancino Ambrato, Italicus rosolio of bergamot, Pisco el Gobernador cordial of cava and goji, apple kombucha, pear and azahar flowers. Refreshing, floral, fruity, delicate ";

  document.getElementById("text-heading-3").textContent = "Great Gatsby";
  document.getElementById("text-paragraph-3").textContent =
    "Macallan 12DC whiskey, white trufflehoney, amaro, essence of lavender and smoked with vanilla and chocolate tobacco. Smoked. ";

  document.getElementById("text-heading-4").textContent = "The Cloud";
  document.getElementById("text-paragraph-4").textContent =
    "Ketel One vodka, Casamigos mezcal, hibiscus, Montenegro amaro, Mancino secco vermouth, birch syrup, Perrier and coffee cloud. Intense, smoky, refreshing, penetrating. ";

  document.getElementById("text-heading-5").textContent = "Brunch in the Moon";
  document.getElementById("text-paragraph-5").textContent =
    "Patrón Silver tequila, Vida del Maguey mezcal, oyster leaves, Port wine, tomato juice, raspberries and ponzu sauce. Spicy, tender, caramelized, sweet. ";
};

export default menu;

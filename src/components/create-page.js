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

  //nav bar at bottom of main
  const navItems = [
    { href: "#", text: "MENU" },
    { href: "#", text: "CONTACT" },
    { href: "#", text: "ABOUT" },
  ];

  const navElem = document.createElement("nav");
  const navList = document.createElement("ul");

  navElem.id = "nav-container";
  navList.id = "nav-bar-wrapper";

  navElem.appendChild(navList);

  for (let i = 0; i < navItems.length; i++) {
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");

    navLink.className = "nav-bar-options main-font-color";

    //set properties on anchor
    navLink.href = navItems[i].href;
    navLink.textContent = navItems[i].text;

    //add anchor to listitem and listitem to list
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  }

  greenLeatherCover.appendChild(navElem);
}

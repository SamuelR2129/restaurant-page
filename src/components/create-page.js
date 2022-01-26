import hand from "./images/hand.svg";

export default function printMe() {
  const pageContent = document.querySelector("#content");
  const greenLeatherCover = document.createElement("div");
  greenLeatherCover.className = "background-cover";
  pageContent.appendChild(greenLeatherCover);

  const handImage = new Image();
  handImage.id = "front-page-hand";
  handImage.src = hand;
  greenLeatherCover.appendChild(handImage);
}

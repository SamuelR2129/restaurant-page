const cocktailTileHover = () => {
  //hover effect for cocktail info on menu page
  let textBox = document.getElementsByClassName("text-box");
  const drinkContainerChildren =
    document.querySelector("#drinks-container").children;

  for (let i = 0; i < drinkContainerChildren.length; i++) {
    let drinkImages = drinkContainerChildren[i];
    drinkImages.addEventListener("mouseover", () => {
      textBox[i].style.display = "flex";
    });

    drinkImages.addEventListener("mouseout", () => {
      textBox[i].style.display = "none";
    });
  }
};

export default cocktailTileHover;

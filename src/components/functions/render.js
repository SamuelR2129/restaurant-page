// removes all content style attributes and removes children till only header remains as the sole children
const render = () => {
  const content = document.querySelector("#content");
  if (content.hasChildNodes()) {
    content.removeChild(content.childNodes[0]);
  }
};

export default render;

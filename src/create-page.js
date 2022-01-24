export default function printMe() {
  const pageContent = document.querySelector("div#content ");
  const test = document.createElement("div");
  test.textContent = "hello world";
  pageContent.appendChild(test);
}

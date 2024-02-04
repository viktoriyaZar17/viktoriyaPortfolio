import "./pageContainer.css";

// Контейнер для страницы
export function getPageContainer() {
  const main = document.createElement("main");
  main.classList.add("page-container", "container");

  return main;
}

import { getMainTitle } from "../components/mainTitle/mainTitle.js";
import { getProductsList } from "../components/productsList/productsList.js";
import { URL } from "../config.js";

// Главная страница
export function getMainPage() {
  const page = document.createElement("div");
  page.classList.add("page", "main-page");

  const mainTitle = getMainTitle("Главная страница");

  const products = getProductsList();
  products.getProducts(`${URL}/wp-json/wp/v1/products?count=4`);

  page.append(mainTitle, products.productsList);
  return page;
}

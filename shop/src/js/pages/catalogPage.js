import { getMainTitle } from "../components/mainTitle/mainTitle.js";
import { getProductsList } from "../components/productsList/productsList.js";
import { URL } from "../config.js";

// Каталог
export function getCatalogPage() {
  const page = document.createElement("div");
  page.classList.add("page", "catalog-page");

  const mainTitle = getMainTitle("Каталог");

  const products = getProductsList();
  products.getProducts(`${URL}/wp-json/wp/v1/products`);

  page.append(mainTitle, products.productsList);
  return page;
}

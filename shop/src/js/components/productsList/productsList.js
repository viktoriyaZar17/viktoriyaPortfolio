import { getProductCard } from "../productCard/productCard.js";
import "./productsList.css";

export function getProductsList() {
  const productsList = document.createElement("div");
  productsList.classList.add("products-list");

  const getProducts = async (URI) => {
    try {
      const response = await fetch(URI);

      if (response.status === 404) {
        throw new Error("Товары не найдены");
      }

      const data = await response.json();

      const list = document.createElement("ul");
      list.classList.add("products-list__list");

      for (const product of data) {
        const productCard = getProductCard(product);
        list.append(productCard);

        //console.log(product);
      }

      productsList.append(list);
    } catch (error) {
      const msg = document.createElement("span");
      msg.classList.add("products-list__msg");
      msg.textContent = error.message;
      productsList.append(msg);
    }
  };

  return {
    productsList,
    getProducts,
  };
}

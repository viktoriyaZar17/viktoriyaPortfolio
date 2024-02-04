import { router } from "../../main.js";
import "./productCard.css";

// Карточка товара
export function getProductCard(product) {
  const item = document.createElement("li");
  item.classList.add("product");

  const productTitle = document.createElement("h2");
  productTitle.classList.add("product__title");

  const productPreview = document.createElement("img");
  productPreview.classList.add("product__preview");
  productPreview.src = product.preview;

  let productLink = document.createElement("a");
  productLink.textContent = product.title;
  productLink.href = "";

  productLink.addEventListener("click", (e) => {
    e.preventDefault();
    router.navigate(`/product/${product.id}`);
  });

  productTitle.append(productLink);

  const productPrice = document.createElement("strong");
  productPrice.classList.add("product__price");
  productPrice.textContent = `${product.price.toLocaleString()} руб.`;

  const addBasket = document.createElement("button");
  addBasket.classList.add("btn", "product__add-basket");
  addBasket.textContent = "В корзину";

  item.append(productPreview, productTitle, productPrice, addBasket);

  return item;
}

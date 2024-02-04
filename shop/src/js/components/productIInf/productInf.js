import { getDesc } from "../desc/desc";
import { getMainTitle } from "../mainTitle/mainTitle";
import "./productInf.css";

export function getProductInf(product) {
  const productWrap = document.createElement("div");
  productWrap.classList.add("product-inf");

  const imgBox = document.createElement("div");
  imgBox.classList.add("product-inf__box-img");

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = "Изображение товара";
  img.classList.add("product-inf__img");

  imgBox.append(img);

  const mainTitle = getMainTitle(product.title);
  mainTitle.classList.add("product-inf__title");

  const price = document.createElement("span");
  price.classList.add("product-inf__price");
  price.textContent = `${product.price.toLocaleString()} руб.`;

  const count = document.createElement("span");
  count.classList.add("product-inf__count");
  count.textContent = `В наличии: ${product.quantity} шт.`;

  const priceBox = document.createElement("div");
  priceBox.classList.add("product-inf__box-price");
  priceBox.append(price, count);

  const desc = getDesc(product.desc);
  desc.classList.add("product-inf__desc");

  const mainBox = document.createElement("div");
  mainBox.classList.add("product-inf__box-main");

  const addBasket = document.createElement("button");
  addBasket.classList.add("btn", "product-inf__add-basket");
  addBasket.textContent = "В корзину";

  mainBox.append(mainTitle, priceBox, desc, addBasket);

  productWrap.append(imgBox, mainBox);
  return productWrap;
}

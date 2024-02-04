import { getDesc } from "../components/desc/desc.js";
import { getMainTitle } from "../components/mainTitle/mainTitle.js";

// Каталог
export function getOrderPage() {
  const page = document.createElement("div");
  page.classList.add("page", "catalog-page");

  const mainTitle = getMainTitle("Оформление");
  const desc = getDesc("Оформление заказа");

  page.append(mainTitle, desc);
  return page;
}

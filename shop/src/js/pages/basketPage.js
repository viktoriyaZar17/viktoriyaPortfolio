import { getDesc } from "../components/desc/desc.js";
import { getMainTitle } from "../components/mainTitle/mainTitle.js";
import { router } from "../main.js";

// Корзина
export function getBasketPage() {
  const page = document.createElement("div");
  page.classList.add("page", "basket-page");

  const mainTitle = getMainTitle("Корзина");
  const desc = getDesc("Страница в разработке");

  // Ссылка оформления заказа
  let linkOrder = document.createElement("a");
  linkOrder.href = "/order";
  linkOrder.classList.add("btn");
  linkOrder.textContent = "Оформление заказа";

  linkOrder.addEventListener("click", (e) => {
    e.preventDefault();
    router.navigate("/order");
  });

  page.append(mainTitle, desc, linkOrder);
  return page;
}

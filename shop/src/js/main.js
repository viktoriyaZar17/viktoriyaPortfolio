import Navigo from "navigo";
import { getHeader } from "./components/header/header.js";
import { getPageContainer } from "./components/pageContainer/pageContainer.js";
import { getProductsList } from "./components/productsList/productsList.js";

const app = document.getElementById("app");
export const router = new Navigo("/");
const header = getHeader();
const pageContainer = getPageContainer();

// Главная страница
router.on("/", async () => {
  pageContainer.innerHTML = "";
  const moduleMain = await import("./pages/mainPage.js");
  const mainPage = moduleMain.getMainPage();
  pageContainer.append(mainPage);
  header.setActiveLink("home");
});

// Страница каталог
router.on("/catalog", async () => {
  pageContainer.innerHTML = "";

  const moduleCatalog = await import("./pages/catalogPage.js");
  const catalogPage = moduleCatalog.getCatalogPage();
  pageContainer.append(catalogPage);
  header.setActiveLink("catalog");
});

// Страница продукта
router.on("/product/:id", async ({ data }) => {
  pageContainer.innerHTML = "";

  const moduleProduct = await import("./pages/productPage.js");
  const productPage = moduleProduct.getProductPage(data.id);
  pageContainer.append(productPage);
  header.setActiveLink();
});

// Страница корзины
router.on("/basket", async () => {
  pageContainer.innerHTML = "";

  const moduleBasket = await import("./pages/basketPage.js");
  const basketPage = moduleBasket.getBasketPage();
  pageContainer.append(basketPage);
  header.setActiveLink("basket");
});

// Страница оформления заказа
router.on("/order", async () => {
  if (true) {
    router.navigate("/");
    return;
  }

  pageContainer.innerHTML = "";

  const moduleOrder = await import("./pages/orderPage.js");
  const orderPage = moduleOrder.getOrderPage();
  pageContainer.append(orderPage);
  header.setActiveLink();
});

// Страница не найдена
router.notFound(async () => {
  pageContainer.innerHTML = "";

  const moduleNotFound = await import("./pages/notFoundPage.js");
  const notFoundPage = moduleNotFound.getNotFoundPage();
  pageContainer.append(notFoundPage);
  header.setActiveLink();
});

router.resolve();

app.append(header.header, pageContainer);

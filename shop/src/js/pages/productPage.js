import { getProductInf } from "../components/productIInf/productInf.js";
import { URL } from "../config.js";

// Страница товара
export function getProductPage(id) {
  const page = document.createElement("div");
  page.classList.add("page", "product-page");

  const getData = async () => {
    const response = await fetch(`${URL}/wp-json/wp/v1/products`);
    const data = await response.json();

    for (const product of data) {
      if (product.id === Number(id)) {
        const productInf = getProductInf(product);
        page.append(productInf);
      }
    }
  };
  getData();

  // const mainTitle = getMainTitle(id);
  // const desc = getDesc("Страница в разработке");
  // page.append(mainTitle, desc);
  return page;
}

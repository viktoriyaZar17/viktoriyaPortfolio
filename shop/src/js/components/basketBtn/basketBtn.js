import { router } from "../../main.js";
import "./basketBtn.css";
import basketSVG from "bundle-text:/src/assets/img/basket.svg";

export function getBasketBtn() {
  const basketBtn = document.createElement("a");
  basketBtn.href = "/basket";
  basketBtn.classList.add("basket-btn");
  basketBtn.innerHTML = basketSVG;

  basketBtn.addEventListener("click", (e) => {
    e.preventDefault();
    router.navigate("/basket");
  });

  return basketBtn;
}

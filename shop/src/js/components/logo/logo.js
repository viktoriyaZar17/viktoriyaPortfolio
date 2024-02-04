import "./logo.css";
import logoImg from "/src/assets/img/logo.svg";

export function getLogo() {
  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.src = logoImg;

  return logo;
}

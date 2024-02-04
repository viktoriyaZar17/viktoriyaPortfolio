import { router } from "../../main.js";
import "./navigationLink.css";

export function getNavigationLink(path, title = "") {
  const link = document.createElement("a");
  link.href = path;
  link.classList.add("navigation-link");
  link.textContent = title;

  link.addEventListener("click", (e) => {
    e.preventDefault();
    router.navigate(path);
  });

  return link;
}

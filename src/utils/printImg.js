import { photoKeys } from "./getImages";
import { cardDesing } from "../components/Image_card/image-card";

export const printImages = () => {
  const p = document.querySelector("#message");
  const ul = document.querySelector("#photo-results");

  if (photoKeys.length === 0) {
    p.textContent = "No results found";
    ul.innerHTML = "";
  } else {
    p.textContent = "";
    for (const photo of photoKeys) {
      const card = cardDesing(photo);
      ul.appendChild(card);
    }
  }
};

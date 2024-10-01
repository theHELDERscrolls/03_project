import "./Home.css";

import { pageCleaner } from "../../utils/cleanPage";
import { fetchImg } from "../../utils/getImages";
import { printImages } from "../../utils/printImg";

export const Home = () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  main.innerHTML = `
    <p id="message"></p>
    <ul id="photo-results"></ul>
    `;
  fetchImg("casa");
  printImages();
};

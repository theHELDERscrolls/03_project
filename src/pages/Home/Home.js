import "./Home.css";

import { pageCleaner } from "../../utils/cleanPage";
import { defaultSearch } from "../../utils/defaultSearch";

export const Home = () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  main.innerHTML = `
    <p id="message"></p>
    <ul id="photo-results"></ul>
    `;
    defaultSearch()
};

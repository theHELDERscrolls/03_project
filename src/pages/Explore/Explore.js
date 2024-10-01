import "./Explore.css";

import { pageCleaner } from "../../utils/cleanPage";

export const Explore = () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  main.innerHTML = `
  <h1>VAMOH A VÉ SI ESTO FURGA</h1>
  `;
};

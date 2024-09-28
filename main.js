import "./style.css";

//! RECUERDA: crea ".env" para no hacer pública la id de Unsplash.

import { createHeader } from "./src/components/Navbar/Navbar";
import { createMain } from "./src/components/Main/Main";
import { createFooter } from "./src/components/Footer/Footer";
import { changeMode } from "./src/utils/changeModeBtn";

const init = () => {
  createHeader();
  createMain();
  createFooter();
  changeMode();
};

init();

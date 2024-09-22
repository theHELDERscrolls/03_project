import "./style.css";

//! RECUERDA: crea ".env" para no hacer pública la id de Unsplash.

import { createHeader } from "./src/components/Header/Header";
import { createMain } from "./src/components/Main/Main";
import { createFooter } from "./src/components/Footer/Footer";

const init = () => {
  createHeader();
  createMain();
  createFooter();
};

init();

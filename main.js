import "./style.css";

import { createHeader } from "./src/components/Navbar/Navbar";
import { Home } from "./src/pages/Home/Home";
import { createFooter } from "./src/components/Footer/Footer";
import { changeMode } from "./src/utils/changeModeBtn";
import { searchImg } from "./src/utils/getImages";

const init = () => {
  createHeader();
  Home();
  createFooter();
  searchImg();
  changeMode();
};

init();

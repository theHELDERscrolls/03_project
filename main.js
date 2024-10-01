import "./style.css";

import { createHeader } from "./src/components/Navbar/Navbar";
import { Home } from "./src/pages/Home/Home";
import { createFooter } from "./src/components/Footer/Footer";
import { changeMode } from "./src/utils/changeModeBtn";
import { searchImg, defaultSearch } from "./src/utils/getImages";
import { linkPage } from "./src/utils/linkPage";

const init = async () => {
  Home();
  createHeader();
  createFooter();
  await defaultSearch();
  searchImg();
  changeMode();
};

init();

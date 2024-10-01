import "./style.css";

import { changeMode } from "./src/utils/changeModeBtn";
import { createFooter } from "./src/components/Footer/Footer";
import { createHeader } from "./src/components/Navbar/Navbar";
import { Explore } from "./src/pages/Explore/Explore";
import { Home } from "./src/pages/Home/Home";
import { linkPage } from "./src/utils/linkPage";
import { searchImg } from "./src/utils/getImages";

const init = () => {
  Home();
  createHeader();
  createFooter();
  searchImg();
  changeMode();
  linkPage("#home_link", Home);
  linkPage("#explore_link", Explore);
};

init();

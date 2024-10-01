import "./style.css";

import { createHeader } from "./src/components/Navbar/Navbar";
import { Home } from "./src/pages/Home/Home";
import { Explore } from "./src/pages/Explore/Explore";
import { createFooter } from "./src/components/Footer/Footer";
import { linkPage } from "./src/utils/linkPage";
import { changeMode } from "./src/utils/changeModeBtn";
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

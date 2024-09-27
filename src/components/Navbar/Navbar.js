import "./Navbar.css";

export const createHeader = () => {
  const header = document.querySelector("header");
  header.innerHTML = `
        <img id="logo" src="src/assets/images/logo_copynterest.png" alt="Copynterest logo">
        <nav>
            <ul>
                <li>
                    <a id="home_link" href="#">Home</a>
                </li>
                <li>
                    <a id="explore_link" href="#">Explore</a>
                </li>
            </ul>
        </nav>
        <input type="search" id="search" name="search" placeholder="Search for images..." aria-label="Search">
        <div id="icons">
            <div>
                <span id="buble"></span>
                <img id="notification" src="./src/assets/icons/icon_notification.svg" alt="Notifications">
            </div>
            <img id="ld-btn" src="./src/assets/icons/icon_sun.svg" alt="Light mode">
        </div>

  `;
};

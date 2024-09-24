import "./Header.css";

export const createHeader = () => {
  const header = document.querySelector("header");
  header.innerHTML = `
    <img id="logo" src="./src/assets/icon_copynterest.png" alt="Copynterest logo">
    <input type="search" id="search" name="search" placeholder="Search for images..." aria-label="Search">
  `;
};

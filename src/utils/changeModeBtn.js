export const changeMode = () => {
  const btn = document.querySelector("#ld-btn");
  btn.addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("dark-mode");

    if (btn.src.includes("icon_sun.svg")) {
      btn.src = "src/assets/icons/icon_moon.png";
    } else {
      btn.src = "src/assets/icons/icon_sun.svg";
    }
  });
};

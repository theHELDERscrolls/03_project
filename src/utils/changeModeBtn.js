export const changeMode = () => {
  const btn = document.querySelector("#ld-btn");
  btn.addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("dark-mode");
  });
};

import { pageCleaner } from "./cleanPage";
import { printImages } from "./printImg";

export let photoKeys = [];

export const fetchImg = async (keyword) => {
  try {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=10&client_id=${
        import.meta.env.VITE_CLIENT_ID
      }`
    );
    const res = await data.json();
    photoKeys = res.results;
    console.log(photoKeys);
  } catch (error) {
    console.error("The server is not responding");
    alert("The server is not responding");
  }
};

export const searchImg = () => {
  const photoResults = document.querySelector("#photo-results");
  const input = document.querySelector("#search");

  input.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
      pageCleaner(photoResults);
      await fetchImg(input.value); // necesitamos esperar a completar esta función antes de comprobar el resto. La definimos como asincrónica
      input.value = "";
      printImages();
    }
  });
};
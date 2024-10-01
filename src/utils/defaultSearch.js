import { printImages } from "./printImg";
import { fetchImg } from "./getImages";
import { pageCleaner } from "./cleanPage";

export const defaultSearch = async () => {
  const photoResults = document.querySelector("#photo-results");
  pageCleaner(photoResults);
  await fetchImg("super sport");
  printImages();
};

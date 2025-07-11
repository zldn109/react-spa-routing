import { atom, selector } from "recoil";

export const selectedCategoryState = atom({
  key: "selectedCategoryState",
  default: "Home",
});

export const newsState = atom({
  key: "newsStae",
  default: [],
});

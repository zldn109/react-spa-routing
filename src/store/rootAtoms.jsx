import { atom, selector } from "recoil";

export const selectedCategoryState = atom({
  key: "selectedCategoryState",
  default: "Home",
});

export const newsState = atom({
  key: "newsState",
  default: [],
});

export const isDayState = atom({
  key: "idDayState",
  default: false,
});

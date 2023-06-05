import { atom } from "recoil";
import { EasyRandomList } from "../../components/ImgData";

export const scoreState = atom({
  key: "score",
  default: 5,
});

export const checkScoreState = atom({
  key: "checkScore",
  default: 0,
});

export const randomListState = atom({
  key: "randomList",
  default: EasyRandomList,
});

export const turnsState = atom({
  key: "turns",
  default: 0,
});

export const selectFirstState = atom({
  key: "selectFirst",
  default: null,
});

export const selectSecondState = atom({
  key: "selectSecond",
  default: null,
});

export const isClickedState = atom({
  key: "isClicked",
  default: false,
});

export const isOpenState = atom({
  key: "isOpen",
  default: false,
});

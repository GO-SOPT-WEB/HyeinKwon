import { atom, atomFamily } from "recoil";
import { EasyRandomList } from "../../model/ImgData";
import { RandomListType } from "./AtomType";

export const scoreState = atom<number>({
  key: "score",
  default: 5,
});

export const checkScoreState = atom<number>({
  key: "checkScore",
  default: 0,
});

export const randomListState = atom<RandomListType[]>({
  key: "randomList",
  default: EasyRandomList,
});

export const turnsState = atom<number>({
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

export const isClickedState = atom<boolean>({
  key: "isClicked",
  default: false,
});

export const isOpenState = atom<boolean>({
  key: "isOpen",
  default: false,
});

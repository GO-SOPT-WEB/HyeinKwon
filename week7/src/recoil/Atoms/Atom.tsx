import { atom } from "recoil";
import { EasyRandomList } from "../../model/ImgData";

export const scoreState = atom<number>({
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

export interface selectCard {
  card: string;
  id: number;
  matched: boolean;
}

export const selectFirstState = atom<selectCard>({
  key: "selectFirst",
  default: {
    card: "card1",
    id: 0,
    matched: false,
  },
});

export const selectSecondState = atom<selectCard>({
  key: "selectSecond",
  default: {
    card: "card2",
    id: 1,
    matched: false,
  },
});

export const isClickedState = atom({
  key: "isClicked",
  default: false,
});

export const isOpenState = atom({
  key: "isOpen",
  default: false,
});

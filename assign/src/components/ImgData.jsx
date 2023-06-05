import imageA from "../assets/image1.gif";
import imageB from "../assets/image2.gif";
import imageC from "../assets/image3.gif";
import imageD from "../assets/image4.gif";
import imageE from "../assets/image5.gif";
import imageF from "../assets/image6.gif";
import imageG from "../assets/image7.gif";
import imageH from "../assets/image8.gif";
import imageI from "../assets/image9.gif";

const IMGLIST = [
  {
    card: imageA,
    matched: false,
  },
  {
    card: imageB,
    matched: false,
  },
  {
    card: imageC,
    matched: false,
  },
  {
    card: imageD,
    matched: false,
  },
  {
    card: imageE,
    matched: false,
  },
  {
    card: imageF,
    matched: false,
  },
  {
    card: imageG,
    matched: false,
  },
  {
    card: imageH,
    matched: false,
  },
  {
    card: imageI,
    matched: false,
  },
];

//이미지 리스트 섞기
const RandomImgList = [...IMGLIST].sort(() => Math.random() - 0.5);

// Easy모드 랜덤으로 섞인 리스트에서 5개씩 자르고, 또 랜덤으로 섞어서 붙인 리스트
const EasyImgList = RandomImgList.slice(0, 5);
export const EasyRandomList = [...EasyImgList, ...EasyImgList]
  .sort(() => Math.random() - 0.5)
  .map((image) => ({ ...image, id: Math.random() }));

//Normal모드
const NormalImgList = RandomImgList.slice(0, 7);
export const NormalRandomList = [...NormalImgList, ...NormalImgList]
  .sort(() => Math.random() - 0.5)
  .map((image) => ({ ...image, id: Math.random() }));

//Hard 모드 (자르는 것 없음), 똑같이 랜덤으로 돌려서 concat으로 붙이기
export const HardRandomList = [...IMGLIST, ...IMGLIST]
  .sort(() => Math.random() - 0.5)
  .map((image) => ({ ...image, id: Math.random() }));

import { TPetal } from "./Path";

export type TFlower = {
  petalCount: number;
  petalHeight: number;
  petalColor?: string;
  strokeColor?: string;
  baseColor?: string;
  petalType?: TPetal;
};

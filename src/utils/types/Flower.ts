import { TPetal } from "./Path";

export type TFlower = {
  petalCount: number;
  petalHeight: number;
  petalColor?: string;
  baseColor?: string;
  petalType?: TPetal;
  baseRadiusFactor?: number;
};

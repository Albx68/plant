import { TPetal } from "./Path";

export type TFlower = {
  petalCount: number;
  petalHeight: number;
  petalColor?: string;
  strokeColor?: string;
  baseStrokeColor?: string;

  baseColor?: string;
  petalType?: TPetal;
  baseRadiusFactor?: number;
};

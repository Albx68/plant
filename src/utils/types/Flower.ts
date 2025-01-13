import { TPetal } from "./Path";

export type TFlower = {
  petalCount: number;
  size: TSize;
  petalColor?: string;
  baseColor?: string;
  petalType?: TPetal;
  baseRadiusFactor?: number;
};

export type TSize = "0.25x" | "0.5x" | "1x" | "2x" | "3x";

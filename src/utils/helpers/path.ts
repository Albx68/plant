import { TPetal } from "../types/Path";

type TGetPetalPaths = {
  type: TPetal;
  petalHeight: number;
};
export const getPetalPaths = ({ type, petalHeight }: TGetPetalPaths) => {
  const petalWidth = petalHeight / 2; // Proportional width
  switch (type) {
    case "heart":
      return `
    M 0,${-petalWidth} 
    C ${-petalWidth / 2},${-petalWidth * 1.5} ${-petalWidth},${
        -petalWidth / 4
      } 0,0 
    C ${petalWidth},${-petalWidth / 4} ${petalWidth / 2},${
        -petalWidth * 1.5
      } 0,${-petalWidth}
  `;

    case "flower":
      return `
                M 0,0 
                C ${-petalWidth},${
        -petalHeight / 2
      } ${-petalWidth},${-petalHeight} 0,${-petalHeight} 
                C ${petalWidth},${-petalHeight} ${petalWidth},${
        -petalHeight / 2
      } 0,0
            `;

    case "heartFlipped":
      return `
                M 0,0 
                C ${-petalWidth / 2},${-petalWidth / 2} ${-petalWidth},${
        petalWidth / 4
      } 0,${petalWidth} 
                C ${petalWidth},${petalWidth / 4} ${petalWidth / 2},${
        -petalWidth / 2
      } 0,0
            `;
  }
};

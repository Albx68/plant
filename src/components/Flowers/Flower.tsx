import { cn } from "../../utils/helpers/cn";
import { getPetalPaths } from "../../utils/helpers/path";
import { TFlower, TSize } from "../../utils/types/Flower";

const DefaultFlower = ({
  petalCount,
  size,
  petalColor = "pink",
  baseColor = "yellow",
  petalType = "flower",
  baseRadiusFactor = 4, //higher number = smaller radius
}: TFlower) => {
  const pad = 40;
  const angleStep = 360 / petalCount; // Angle between petals
  const petalHeight = getPetalHeight(size);
  // Generate the path for a single petal
  const path = getPetalPaths({ type: petalType, petalHeight });
  return (
    <svg
      width={petalHeight * 2}
      height={petalHeight * 2}
      viewBox={`${-petalHeight - pad} ${-petalHeight - pad} ${
        petalHeight * 2 + pad * 2
      } ${petalHeight * 2 + pad * 2}`}
      xmlns="http://www.w3.org/2000/svg"
      // className={cn("border-2 border-neutral-300")}
    >
      {Array.from({ length: petalCount }).map((_, index) => (
        <path
          key={index}
          d={path}
          fill={petalColor}
          stroke={"black"}
          strokeWidth="4"
          transform={`rotate(${index * angleStep})`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}

      {/* Optional center for the flower */}
      <circle
        cx="0"
        cy="0"
        r={petalHeight / baseRadiusFactor}
        fill={baseColor}
        stroke={"black"}
        strokeWidth="4"
      />
    </svg>
  );
};

export default DefaultFlower;

const getPetalHeight = (size: TSize) => {
  switch (size) {
    case "0.25x":
      return 10;
    case "0.5x":
      return 20;
    case "1x":
      return 50;
    case "2x":
      return 100;
    case "3x":
      return 150;
    default:
      return 50;
  }
};

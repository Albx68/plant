import { getPetalPaths } from "../../utils/helpers/path";
import { TFlower } from "../../utils/types/Flower";

const DefaultFlower = ({
  petalCount,
  petalHeight,
  petalColor = "pink",
  strokeColor = "black",
  baseColor = "yellow",
  petalType = "flower",
}: TFlower) => {
  const angleStep = 360 / petalCount; // Angle between petals

  // Generate the path for a single petal
  const path = getPetalPaths({ type: petalType, petalHeight });
  return (
    <svg
      width={petalHeight * 2}
      height={petalHeight * 2}
      viewBox={`${-petalHeight} ${-petalHeight} ${petalHeight * 2} ${
        petalHeight * 2
      }`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: petalCount }).map((_, index) => (
        <path
          key={index}
          d={path}
          fill={petalColor}
          stroke={strokeColor}
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
        r={petalHeight / 4}
        fill={baseColor}
        stroke="black"
        strokeWidth="4"
      />
    </svg>
  );
};

export default DefaultFlower;

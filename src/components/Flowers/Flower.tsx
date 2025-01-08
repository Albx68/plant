import { getEllipses } from "../../utils/helpers/getEllipses";
import { TFlower } from "../../utils/types/Flower";

const Flower = ({
  radius,
  petalCount,
  petalHeight,
  petalColor,
  baseColor,
}: TFlower) => {
  const height = radius * 2 + petalHeight * 2;
  const width = radius * 2 + petalHeight * 2;
  const cx = width / 2;
  const cy = height / 2;
  const ellipses = getEllipses(cx, cy, radius, petalCount, height, width, 1.5);
  return (
    <svg width={width} height={height}>
      {ellipses.map((ellipse, index) => {
        return (
          <ellipse
            key={index}
            {...ellipse}
            fill={petalColor}
            stroke="black"
            strokeWidth={4}
          />
        );
      })}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill={baseColor}
        strokeWidth={4}
        stroke="black"
      />
    </svg>
  );
};

export default Flower;

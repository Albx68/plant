import "./App.css";

function App() {
  return (
    <>
      <div className="">
        {flowerData?.map((flower) => (
          <CreateFlower {...flower} />
        ))}
      </div>
    </>
  );
}

const flowerData = [
  {
    name: "Rose",
    radius: 50,
    petalCount: 6,
    petalHeight: 90,
    petalColor: "lavender",
    baseColor: "blue",
  },
  {
    name: "Sunflower",
    radius: 50,
    petalCount: 6,
    petalHeight: 90,
    petalColor: "red",
    baseColor: "yellow",
  },
  {
    name: "Lily",
    radius: 50,
    petalCount: 6,
    petalHeight: 90,
    petalColor: "blue",
    baseColor: "purple",
  },
  {
    name: "Tulip",
    radius: 50,
    petalCount: 6,
    petalHeight: 90,
    petalColor: "yellow",
    baseColor: "orange",
  },
];

export default App;

const CreateFlower = ({
  radius,
  petalCount,
  petalHeight,
  petalColor,
  baseColor,
}: {
  radius: number;
  petalCount: number;
  petalHeight: number;
  petalColor: string;
  baseColor: string;
}) => {
  const height = radius * 2 + petalHeight * 2;
  const width = radius * 2 + petalHeight * 2;
  const cx = width / 2;
  const cy = height / 2;
  const ellipses = calculateEllipsesAroundCircle(
    cx,
    cy,
    radius,
    petalCount,
    height,
    width,
    1.5
  );
  return (
    <svg width={width} height={height}>
      {ellipses.map((ellipse, index) => {
        return <ellipse key={index} {...ellipse} fill={petalColor} />;
      })}
      <circle cx={cx} cy={cy} r={radius} fill={baseColor} />
    </svg>
  );
};

// type Line = {
//   x1: number;
//   y1: number;
//   x2: number;
//   y2: number;
// };

// const calculateLinesAroundCircle = (
//   centerX: number,
//   centerY: number,
//   radius: number,
//   lineCount: number
// ): Line[] => {
//   const lineMargin = radius * 0.2;
//   const lines: Line[] = [];
//   const angleStep = (2 * Math.PI) / lineCount; // Divide the circle into equal parts

//   for (let i = 0; i < lineCount; i++) {
//     const angle = angleStep * i;

//     const x1 = centerX + (radius + lineMargin) * Math.cos(angle);
//     const y1 = centerY + (radius + lineMargin) * Math.sin(angle);

//     const x2 = centerX + (radius + lineMargin + 20) * Math.cos(angle);
//     const y2 = centerY + (radius + lineMargin + 20) * Math.sin(angle);

//     lines.push({ x1, y1, x2, y2 });
//   }

//   return lines;
// };

const calculateEllipsesAroundCircle = (
  centerX: number,
  centerY: number,
  radius: number,
  ellipseCount: number,
  svgWidth: number,
  svgHeight: number,
  petalOffset: number //this will offset petal distance from center, higher the number, less distance from center
) => {
  // Dynamically calculate ellipse radii based on number of petals and SVG size
  const maxRadiusX = svgWidth / 2 - 10; // Leave some margin
  const maxRadiusY = svgHeight / 2 - 10; // Leave some margin

  // Calculate ellipse size based on number of petals, ensuring they fit in the SVG container
  const ellipseRx = Math.min(
    maxRadiusX / Math.sqrt(ellipseCount),
    radius / petalOffset
  ); // Scale by number of petals and radius
  const ellipseRy = Math.min(
    maxRadiusY / Math.sqrt(ellipseCount),
    radius / petalOffset
  );

  const ellipses: { cx: number; cy: number; rx: number; ry: number }[] = [];
  const angleStep = (2 * Math.PI) / ellipseCount; // Divide the circle into equal parts

  for (let i = 0; i < ellipseCount; i++) {
    const angle = angleStep * i;
    // Calculate the center position for the ellipse
    const cx = centerX + radius * Math.cos(angle);
    const cy = centerY + radius * Math.sin(angle);

    ellipses.push({
      cx,
      cy,
      rx: ellipseRx,
      ry: ellipseRy,
    });
  }

  return ellipses;
};

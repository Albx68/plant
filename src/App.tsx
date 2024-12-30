import { useState } from "react";
import "./App.css";

const defaultFlower = {
  name: "Sunflower",
  radius: 50,
  petalCount: 6,
  petalHeight: 90,
  petalColor: "#ff3865",
  baseColor: "#dffddf",
};
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [newFlower, setNewFlower] = useState(defaultFlower);

  const [flowerData, setFlowerData] = useState([
    {
      name: "Sunflower",
      radius: 50,
      petalCount: 6,
      petalHeight: 90,
      petalColor: "red",
      baseColor: "yellow",
    },
  ]);

  const handleAddFlower = () => {
    if (newFlower.petalColor && newFlower.baseColor && newFlower.petalCount) {
      setFlowerData([
        ...flowerData,
        {
          ...newFlower,
          name: `Custom Flower ${flowerData.length + 1}`,
          radius: 50,
          petalHeight: 90,
        },
      ]);
      setNewFlower({
        petalColor: "",
        baseColor: "",
        petalCount: 6,
      });
    } else {
      alert("Please select all options!");
    }
  };
  const handleOptionSelect = (
    field: "petalColor" | "baseColor" | "petalCount",
    value: string | number
  ) => {
    setNewFlower({ ...newFlower, [field]: value });
  };
  return (
    <>
      <div className="">
        {flowerData?.map((flower) => (
          <CreateFlower {...flower} />
        ))}
        <div>
          <button onClick={toggleSidebar}>Plant 🌸 </button>
        </div>
        {/* <button
          onClick={toggleSidebar}
          className="fixed top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition"
        >
          {isOpen ? "Close Sidebar" : "Open Sidebar"}
        </button> */}
        {/* Overlay */}

        {/* Sidebar */}

        <div
          className={`fixed top-0 z-50 right-0 h-full w-1/4 bg-neutral-900 text-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 shadow-lg`}
        >
          <div className="p-4 flex justify-center">
            <div className="flex gap-6 flex-col">
              <h2>Create a New Flower</h2>
              <CreateFlower radius={50} petalHeight={90} {...newFlower} />
              {/* Petal Color Options */}
              <h3>Petal Color</h3>
              <div style={{ display: "flex", gap: "10px" }}>
                {["lavender", "red", "yellow", "pink"].map((color) => (
                  <div
                    key={color}
                    style={{
                      padding: "10px",
                      border:
                        newFlower.petalColor === color
                          ? "2px solid black"
                          : "1px solid gray",
                      cursor: "pointer",
                      backgroundColor: color,
                    }}
                    onClick={() => handleOptionSelect("petalColor", color)}
                  >
                    {color}
                  </div>
                ))}
              </div>

              {/* Base Color Options */}
              <h3>Base Color</h3>
              <div style={{ display: "flex", gap: "10px" }}>
                {["blue", "yellow", "orange", "green"].map((color) => (
                  <div
                    key={color}
                    style={{
                      padding: "10px",
                      border:
                        newFlower.baseColor === color
                          ? "2px solid black"
                          : "1px solid gray",
                      cursor: "pointer",
                      backgroundColor: color,
                    }}
                    onClick={() => handleOptionSelect("baseColor", color)}
                  >
                    {color}
                  </div>
                ))}
              </div>

              {/* Petal Count Options */}
              <h3>Petal Count</h3>
              <div style={{ display: "flex", gap: "10px" }}>
                {[6, 8, 10, 12].map((count) => (
                  <div
                    key={count}
                    style={{
                      padding: "10px",
                      border:
                        newFlower.petalCount === count
                          ? "2px solid black"
                          : "1px solid gray",
                      cursor: "pointer",
                    }}
                    onClick={() => handleOptionSelect("petalCount", count)}
                  >
                    {count} petals
                  </div>
                ))}
              </div>

              <button style={{ marginTop: "20px" }} onClick={handleAddFlower}>
                Add Flower
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </>
  );
}

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

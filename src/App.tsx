import "./App.css";
import Flower from "./components/Flowers/Flower";
import { TFlower } from "./utils/types/Flower";

// const flowerData: TFlower[] = [
//   {
//     petalCount: 5,
//     petalHeight: 200,
//     petalColor: "#dffddf",
//     baseColor: "yellow",
//     petalType: "heart",
//     baseRadiusFactor: 8,
//   },
//   {
//     petalCount: 5,
//     petalHeight: 80,
//     petalColor: "red",
//     baseColor: "yellow",
//     petalType: "heartFlipped",
//     baseRadiusFactor: 8,
//   },
//   {
//     petalCount: 6,
//     petalHeight: 50,
//     petalColor: "#ff3865",
//     baseColor: "#dffddf",
//     baseRadiusFactor: 2,
//   },
// ];
function App() {
  return (
    <>
      <div className="flex flex-wrap  ">
        {flowerData?.map((flower) => (
          <Flower {...flower} />
        ))}
      </div>
    </>
  );
}

export default App;

export const flowerData: TFlower[] = [
  {
    petalCount: 3, // Roses typically have many petals
    petalHeight: 100,
    petalColor: "#ff3865", // Classic rose pink
    strokeColor: "#ff1111", // A darker pink for contrast
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "heart",
    baseRadiusFactor: 9,
  },
  {
    petalCount: 20,
    petalHeight: 100,
    petalColor: "#FFDA03", // Bright sunflower yellow
    strokeColor: "#8B8000", // Darker yellow for the outline
    baseColor: "#228B22", // Forest green
    petalType: "sunflower",
    baseRadiusFactor: 1.5,
  },
  {
    petalCount: 18,
    petalHeight: 100,
    petalColor: "#FFFFFF", // Daisy petals are white
    strokeColor: "#F8F8FF", // Light gray for delicate definition
    baseColor: "#FFD700", // Golden yellow for the center
    petalType: "daisy",
    // baseRadiusFactor: 0.8,
  },
  {
    petalCount: 6,
    petalHeight: 100,
    petalColor: "#FF1493", // Deep pink for tulips
    strokeColor: "#C71585", // A darker pink outline
    baseColor: "#008000", // Green for the stem
    petalType: "tulip",
    // baseRadiusFactor: 1,
  },
  {
    petalCount: 6,
    petalHeight: 100,
    petalColor: "#E6E6FA", // Lavender-like light purple
    strokeColor: "#9370DB", // Purple for definition
    baseColor: "#4B0082", // Dark indigo for the base
    petalType: "lily",
    // baseRadiusFactor: 1.1,
  },
  {
    petalCount: 5,
    petalHeight: 100,
    petalColor: "#FFB6C1", // Light pink petals for orchids
    strokeColor: "#FF69B4", // Bright pink outline
    baseColor: "#8B0000", // Dark red for the center
    petalType: "orchid",
    // baseRadiusFactor: 0.9,
  },
  {
    petalCount: 5,
    petalHeight: 100,
    petalColor: "#FFB6C1", // Light pink for cherry blossoms
    strokeColor: "#DB7093", // Pale red for the outline
    baseColor: "#2E8B57", // A greenish brown for stems
    petalType: "cherryBlossom",
    // baseRadiusFactor: 0.8,
  },
  {
    petalCount: 8,
    petalHeight: 100,
    petalColor: "#FF69B4", // Vibrant pink for lotuses
    strokeColor: "#FF1493", // A darker pink for the outline
    baseColor: "#008000", // Green for the pad
    petalType: "lotus",
    // baseRadiusFactor: 1.3,
  },
  {
    petalCount: 20,
    petalHeight: 100,
    petalColor: "#FFA07A", // Soft orange for marigolds
    strokeColor: "#FF4500", // Deep orange-red for contrast
    baseColor: "#228B22", // Forest green for the stem
    petalType: "marigold",
    // baseRadiusFactor: 1.4,
  },
  {
    petalCount: 6,
    petalHeight: 100,
    petalColor: "#1E90FF", // Blue petals for bluebells
    strokeColor: "#00008B", // Dark blue for the outline
    baseColor: "#6A5ACD", // Slate blue for the stem
    petalType: "bluebell",
    // baseRadiusFactor: 1,
  },
];

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

// flowerSidebar =         {/* <div>
//           <button onClick={toggleSidebar}>Plant 🌸 </button>
//         </div> */}
//         {/* <button
//           onClick={toggleSidebar}
//           className="fixed top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition"
//         >
//           {isOpen ? "Close Sidebar" : "Open Sidebar"}
//         </button> */}
//         {/* Overlay */}

//         {/* Sidebar */}

//         <div
//           className={`fixed top-0 z-50 right-0 h-full w-1/4 bg-neutral-900 text-white transform ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           } transition-transform duration-300 shadow-lg`}
//         >
//           <div className="p-4 flex justify-center">
//             <div className="flex gap-6 flex-col">
//               <h2>Create a New Flower</h2>
//               <CreateFlower {...newFlower} />
//               {/* Petal Color Options */}
//               <h3>Petal Color</h3>
//               <div style={{ display: "flex", gap: "10px" }}>
//                 {["lavender", "red", "yellow", "pink"].map((color) => (
//                   <div
//                     key={color}
//                     style={{
//                       padding: "10px",
//                       border:
//                         newFlower.petalColor === color
//                           ? "2px solid black"
//                           : "1px solid gray",
//                       cursor: "pointer",
//                       backgroundColor: color,
//                     }}
//                     onClick={() => handleOptionSelect("petalColor", color)}
//                   >
//                     {color}
//                   </div>
//                 ))}
//               </div>

//               {/* Base Color Options */}
//               <h3>Base Color</h3>
//               <div style={{ display: "flex", gap: "10px" }}>
//                 {["blue", "yellow", "orange", "green"].map((color) => (
//                   <div
//                     key={color}
//                     style={{
//                       padding: "10px",
//                       border:
//                         newFlower.baseColor === color
//                           ? "2px solid black"
//                           : "1px solid gray",
//                       cursor: "pointer",
//                       backgroundColor: color,
//                     }}
//                     onClick={() => handleOptionSelect("baseColor", color)}
//                   >
//                     {color}
//                   </div>
//                 ))}
//               </div>

//               {/* Petal Count Options */}
//               <h3>Petal Count</h3>
//               <div style={{ display: "flex", gap: "10px" }}>
//                 {[6, 8, 10, 12].map((count) => (
//                   <div
//                     key={count}
//                     style={{
//                       padding: "10px",
//                       border:
//                         newFlower.petalCount === count
//                           ? "2px solid black"
//                           : "1px solid gray",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => handleOptionSelect("petalCount", count)}
//                   >
//                     {count} petals
//                   </div>
//                 ))}
//               </div>

//               <button style={{ marginTop: "20px" }} onClick={handleAddFlower}>
//                 Add Flower
//               </button>
//             </div>
//           </div>
//         </div>
//         {isOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-40"
//             onClick={toggleSidebar}
//           ></div>
//         )}
//       </div>

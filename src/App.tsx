import { useState } from "react";
import "./App.css";
import CreateFlower from "./components/forms/CreateFlower";
import { TFlower } from "./utils/types/Flower";
import YourBag from "./components/screens/YourBag";
import Garden from "./components/screens/Garden";

type TScreen = "🐞" | "🌼" | "🌱";
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
  const [screen,] = useState<{ title: string; value: TScreen }>({
    title: "Garden 🐞",
    value: "🌼",
  });

  const getScreen = () => {
    switch (screen.value) {
      case "🐞":
        return <Garden />;
      case "🌼":
        return <CreateFlower />;

      case "🌱":
        return <YourBag />;
    }
  };
  const currentScreen = getScreen();
  // const screens: { title: string; value: TScreen }[] = [
  //   {
  //     title: "Garden 🐞",
  //     value: "🐞",
  //   },
  //   { title: "Create 🌼", value: "🌼" },
  //   { title: "Bag 🌱", value: "🌱" },
  // ];
  return (
    <div className="text-neutral-800">
      {/* <div className="sticky left-0 bottom-0 flex gap-2 items-center justify-center bg-emerald-50 w-screen h-[100px] ">
        {screens?.map((curr) => {
          const isSelected = curr.value === screen.value;
          return (
            <div
              key={curr.title}
              className={cn(
                "cursor-pointer py-2 px-4 rounded-3xl text-neutral-500 hover:text-neutral-900 border-2 border-neutral-300 hover:border-emerald-500",
                {
                  "text-neutral-900  border-2 border-emerald-700": isSelected,
                }
              )}
              onClick={() => setScreen(curr)}
            >
              {curr.title}
            </div>
          );
        })}
      </div> */}
      <div className="flex flex-wrap ">{currentScreen}</div>
    </div>
  );
}

export default App;

export const flowerData: TFlower[] = [
  {
    petalCount: 7, // Roses typically have many petals
    petalColor: "lavender", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "tulip",
    baseRadiusFactor: 4,
    size: "2x",
  },
  {
    petalCount: 7, // Roses typically have many petals
    petalColor: "lavender", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "tulip",
    baseRadiusFactor: 4,
    size: "2x",
  },
  {
    petalCount: 7, // Roses typically have many petals
    petalColor: "lavender", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "tulip",
    baseRadiusFactor: 4,
    size: "3x",
  },
  {
    petalCount: 18, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "daisy",
    baseRadiusFactor: 3,
    size: "3x",
  },
  {
    petalCount: 18, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "daisy",
    baseRadiusFactor: 3,
    size: "3x",
  },
  {
    petalCount: 18, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "daisy",
    baseRadiusFactor: 3,
    size: "2x",
  },
  {
    petalCount: 18, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "daisy",
    baseRadiusFactor: 3,
    size: "2x",
  },
  {
    petalCount: 18, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "lily",
    baseRadiusFactor: 3,
    size: "2x",
  },
  {
    petalCount: 6, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "heart",
    baseRadiusFactor: 4,
    size: "2x",
  },

  {
    petalCount: 8, // Roses typically have many petals
    petalColor: "#dffddf", // Classic rose pink
    baseColor: "#11ff99", // Dark green for the stem
    petalType: "heart",
    baseRadiusFactor: 10,
    size: "2x",
  },
  {
    petalCount: 7, // Roses typically have many petals
    petalColor: "lavender", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "tulip",
    baseRadiusFactor: 4,
    size: "2x",
  },
  {
    petalCount: 18, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "daisy",
    baseRadiusFactor: 3,
    size: "2x",
  },
  {
    petalCount: 18, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "lily",
    baseRadiusFactor: 3,
    size: "2x",
  },
  {
    petalCount: 6, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "heart",
    baseRadiusFactor: 4,
    size: "2x",
  },
  {
    petalCount: 18, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "daisy",
    baseRadiusFactor: 3,
    size: "2x",
  },
  {
    petalCount: 18, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "lily",
    baseRadiusFactor: 3,
    size: "1x",
  },
  {
    petalCount: 6, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "heart",
    baseRadiusFactor: 4,
    size: "1x",
  },
  {
    petalCount: 18, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "daisy",
    baseRadiusFactor: 3,
    size: "1x",
  },
  {
    petalCount: 18, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "lily",
    baseRadiusFactor: 3,
    size: "2x",
  },
  {
    petalCount: 6, // Roses typically have many petals
    petalColor: "#ff3865", // Classic rose pink
    baseColor: "#dffddf", // Dark green for the stem
    petalType: "heart",
    baseRadiusFactor: 4,
    size: "3x",
  },

  {
    petalCount: 8, // Roses typically have many petals
    petalColor: "#dffddf", // Classic rose pink
    baseColor: "#11ff99", // Dark green for the stem
    petalType: "heart",
    baseRadiusFactor: 10,
    size: "1x",
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

import { useState } from "react";
import { HslaColorPicker } from "react-colorful";
import Point from "../miscallaneous/Point";

const PickPetalColor = ({
  setPetalColor,
}: {
  setPetalColor: (color: string) => void;
}) => {
  const [color, setColor] = useState({ h: 0, s: 0, l: 0, a: 1 });
  return (
    <div>
      <div className="mt-4 flex flex-col items-center">
        <Point>3</Point>
        <p>Pick petal color</p>
      </div>
      <div className="h-40 w-full  border-b-2 border-neutral-700">
        <HslaColorPicker
          color={color}
          onChange={({ h, s, l, a }) => {
            setColor({ h, s, l, a });
            const hsl = `hsla(${h}, ${s}%, ${l}%, ${a})`;
            setPetalColor(hsl);
          }}
        />
      </div>
      <div className="h-14"></div>
    </div>
  );
};

export default PickPetalColor;

import { useState } from "react";
import { HslaColorPicker } from "react-colorful";
import Point from "../miscallaneous/Point";

const PickFlowerBaseColor = ({
  setBaseColor,
}: {
  setBaseColor: (color: string) => void;
}) => {
  const [color, setColor] = useState({ h: 0, s: 0, l: 0, a: 1 });
  return (
    <div>
      <div className="mt-4 flex flex-col items-center">
        <Point>4</Point>
        <p>Pick base color</p>
      </div>
      <div className="h-40 w-full  border-b-2 border-neutral-700">
        <HslaColorPicker
          color={color}
          onChange={({ h, s, l, a }) => {
            setColor({ h, s, l, a });
            const hsl = `hsla(${h}, ${s}%, ${l}%, ${a})`;
            setBaseColor(hsl);
          }}
        />
      </div>
      <div className="h-14"></div>
    </div>
  );
};

export default PickFlowerBaseColor;

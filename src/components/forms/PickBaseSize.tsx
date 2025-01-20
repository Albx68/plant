//@ts-nocheck
import Point from "../miscallaneous/Point";
import DialSlider from "../inputs/DialSlider";

const PickBaseSize = ({
  baseFactor,
  setBaseFactor,
}: {
  petalCount: number;
  setBaseFactor: (count: number) => void;
}) => {
  return (
    <div>
      <div className="mt-4 flex flex-col items-center">
        <Point>5</Point>
        <p>Pick base size</p>
      </div>
      <div className="h-40 w-full overflow-hidden  border-b-2 border-neutral-700">
        <DialSlider
          value={baseFactor}
          transformConfig={{ inputRange: [-90, 90], outputRange: [12, 2] }}
          setValue={setBaseFactor}
        />
      </div>
    </div>
  );
};

export default PickBaseSize;

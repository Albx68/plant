//@ts-nocheck
import Point from "../miscallaneous/Point";
import DialSlider from "../inputs/DialSlider";

const PickPetalCount = ({
  petalCount,
  setPetalCount,
}: {
  petalCount: number;
  setPetalCount: (count: number) => void;
}) => {
  return (
    <div>
      <div className="mt-4 flex flex-col items-center">
        <Point>2</Point>
        <p>Pick petal count</p>
      </div>
      <div className="h-40 w-full overflow-hidden  border-b-2 border-neutral-700">
        <DialSlider value={petalCount} setValue={setPetalCount} />
      </div>
    </div>
  );
};

export default PickPetalCount;

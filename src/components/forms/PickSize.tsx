import SingleSelect, { TDataPoint } from "../inputs/SingleSelect";
import Point from "../miscallaneous/Point";

const PickSize = ({
  size,
  setSize,
}: {
  size: TDataPoint<string>;
  setSize: (size: string) => void;
}) => {
  return (
    <div className="r">
      <div className="mt-4 flex flex-col items-center">
        <Point>6</Point>
        <p>Pick a size</p>
      </div>
      <SingleSelect
        className="flex gap-2 my-4"
        selected={size}
        setSelected={setSize}
        data={[
          { name: "1x", value: "1x" },
          { name: "2x", value: "2x" },
          { name: "3x", value: "3x" },
        ]}
      />
    </div>
  );
};

export default PickSize;

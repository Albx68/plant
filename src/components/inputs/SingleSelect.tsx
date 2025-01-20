//@ts-nocheck

import { TPetal } from "../../utils/types/Path";
import { cn } from "../../utils/helpers/cn";
import { TFlower } from "../../utils/types/Flower";
import DefaultFlower from "../flowers/DefaultFlower";

export type TDataPoint<T> = {
  name: string;
  value: T;
};
type TSingleSelect<T> = {
  selected: TDataPoint<T>;
  setSelected: (T: T) => void;
  data: TDataPoint<T>[];
  className: string;
};

const SingleSelect = <T,>({
  selected,
  setSelected,
  data,
  className,
}: TSingleSelect<T>): JSX.Element => {
  const options = data.map((option) => {
    const flowerData: TFlower = {
      petalType: option.value as TPetal,
      size: "1x",
      petalColor: "pink",
      baseColor: "yellow",
      baseRadiusFactor: 0,
      petalCount: 1,
    };
    const isSelected = option.value === selected.value;
    return (
      <div
        key={option.name}
        onClick={() => setSelected(option.value)}
        className={cn(
          "relative rounded-xl cursor-pointer p-2 border-2 border-neutral-700 shadow-lg ",
          {
            "border-neutral-700 bg-rose-200 ": isSelected,
          }
        )}
      >
        <div className="flex items-center justify-center">
          <DefaultFlower {...flowerData} />
        </div>
        <p className="absolute bottom-1 left-1/2 -translate-x-1/2">
          {option.name}
        </p>
      </div>
    );
  });
  return <div className={className}>{options}</div>;
};

export default SingleSelect;

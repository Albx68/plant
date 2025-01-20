import { flowerData } from "../../App";
import DefaultFlower from "../flowers/Flower";

const Garden = () => {
  return (
    <div className="flex flex-wrap">
      {flowerData?.map((flower) => (
        <DefaultFlower {...flower} />
      ))}
    </div>
  );
};

export default Garden;

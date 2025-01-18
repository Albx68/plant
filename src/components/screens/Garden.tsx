import { flowerData } from "../../App";
import Flower from "../flowers/Flower";

const Garden = () => {
  return (
    <div className="flex flex-wrap">
      {flowerData?.map((flower) => (
        <Flower {...flower} />
      ))}
    </div>
  );
};

export default Garden;

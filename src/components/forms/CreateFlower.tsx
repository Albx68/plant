import { useCallback, useState } from "react";
import DefaultFlower from "../flowers/Flower";
import { TFlower } from "../../utils/types/Flower";
import SingleSelect, { TDataPoint } from "../inputs/SingleSelect";
import PetalData from "../../utils/constants/PetalData";
import { TPetal } from "../../utils/types/Path";
import Point from "../miscallaneous/Point";
import AnyCarousel from "../carousels/AnyCarousel";
import DialSlider from "../inputs/DialSlider";
import { HexColorPicker, HslaColorPicker } from "react-colorful";
import PickPetalColor from "./PickPetalColor";
import PickPetalCount from "./PickPetalCount";
import PickFlowerBaseColor from "./PickFlowerBaseColor";
import PickBaseSize from "./PickBaseSize";
import PickSize from "./PickSize";
import SaveFlower from "./SaveFlower";

const CreateFlower = () => {
  const [currentFlower, setCurrentFlower] = useState<TFlower>({
    petalCount: 8,
    size: "2x",
    petalColor: "hsla(254, 100%, 50%, 0.6)",
    baseColor: "#ffcc86",
    petalType: PetalData[0].value,
    baseRadiusFactor: 4,
  });
  const currentPetal: TDataPoint<TPetal> = {
    name: currentFlower.petalType!,
    value: currentFlower.petalType!,
  };
  const setCurrentPetal = useCallback(
    (petal: TPetal) => {
      setCurrentFlower((prevState) => ({
        ...prevState,
        petalType: petal,
      }));
    },
    [setCurrentFlower]
  );

  const setPetalCount = useCallback(
    (count: number) => {
      setCurrentFlower((prevState) => ({
        ...prevState,
        petalCount: count,
      }));
    },
    [setCurrentFlower]
  );

  const setPetalColor = useCallback(
    (color: string) => {
      setCurrentFlower((prevState) => ({
        ...prevState,
        petalColor: color,
      }));
    },
    [setCurrentFlower]
  );
  const setBaseColor = useCallback(
    (color: string) => {
      setCurrentFlower((prevState) => ({
        ...prevState,
        baseColor: color,
      }));
    },
    [setCurrentFlower]
  );

  const setBaseFactor = useCallback(
    (count: number) => {
      setCurrentFlower((prevState) => ({
        ...prevState,
        baseRadiusFactor: count,
      }));
    },
    [setCurrentFlower]
  );
  const setSize = useCallback(
    (size: number) => {
      setCurrentFlower((prevState) => ({
        ...prevState,
        size: size,
      }));
    },
    [setCurrentFlower]
  );
  const createFlowerSteps = getCreateFlowerSteps({
    currentPetal,
    setCurrentPetal,
    setPetalCount,
    petalCount: currentFlower.petalCount,
    petalColor: currentFlower.petalColor,
    setPetalColor: setPetalColor,
    setBaseColor,
    baseFactor: currentFlower.baseRadiusFactor,
    setBaseFactor,
    setSize,
    size: currentFlower.size,
  });
  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-neutral-800">Create a New Flower</h2>
      <DefaultFlower {...currentFlower} />
      <AnyCarousel childrenArray={createFlowerSteps}></AnyCarousel>
    </div>
  );
};

export default CreateFlower;

const getCreateFlowerSteps = ({
  currentPetal,
  setCurrentPetal,
  petalCount,
  setPetalCount,
  setPetalColor,
  petalColor,
  setBaseColor,
  baseFactor,
  setBaseFactor,
  setSize,
  size,
}) => [
  <div>
    <div className="mt-4 flex flex-col items-center">
      <Point>1</Point>
      <p>Pick petal shape</p>
    </div>
    <SingleSelect
      className="grid grid-cols-4 gap-2 my-2"
      selected={currentPetal}
      setSelected={setCurrentPetal}
      data={PetalData}
    />
  </div>,
  <PickPetalCount petalCount={petalCount} setPetalCount={setPetalCount} />,
  <PickPetalColor setPetalColor={setPetalColor} />,
  <PickFlowerBaseColor setBaseColor={setBaseColor} />,
  <PickBaseSize baseFactor={baseFactor} setBaseFactor={setBaseFactor} />,
  <PickSize size={{ name: size, value: size }} setSize={setSize} />,
  <SaveFlower />,
];

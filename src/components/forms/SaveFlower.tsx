import Point from "../miscallaneous/Point";

const SaveFlower = () => {
  return (
    <div>
      <div className="r">
        <div className="mt-4 flex flex-col items-center">
          <Point>8</Point>
          <button className="border-2 border-neutral-700 text-neutral-900 bg-gradient-to-br from-rose-200 to-purple-300 my-4  rounded-3xl hover:bg-gradient-to-bl hover:from-purple-300 hover:to-rose-300 transition">
            Save Flower
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveFlower;

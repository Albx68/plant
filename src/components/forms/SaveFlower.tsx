import Point from "../miscallaneous/Point";

const SaveFlower = () => {
  return (
    <div className = "">
      <div className="r">
        <div className="mt-4 flex flex-col items-center">
          <Point>8</Point>
          <div className="flex gap-2">
            <button className="border-2 border-neutral-700 text-neutral-900 bg-gradient-to-br from-rose-200 to-purple-300 my-4  rounded-3xl hover:bg-gradient-to-bl hover:from-purple-300 hover:to-rose-300 transition">
              Plant Now
            </button>
            <button className="border-2 border-neutral-700 text-neutral-900 bg-emerald-200 my-4  rounded-3xl ">
              Save For Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveFlower;

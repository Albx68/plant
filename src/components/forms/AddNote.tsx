import React from "react";
import Point from "../miscallaneous/Point";

const AddNote = () => {
  return (
    <div>
      <div className="r">
        <div className="mt-4 flex flex-col items-center">
          <Point>7</Point>
          <p>Add a note 📝!</p>
          <textarea
            className="w-full h-28 border-2 border-neutral-700 rounded-3xl p-2 text-neutral-900 bg-white my-4"
            placeholder="Add a note"
          />
        </div>
      </div>
    </div>
  );
};

export default AddNote;

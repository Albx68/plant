import React, { useState } from "react";
import { Circle, MoveLeft, MoveRight } from "lucide-react";
import { cn } from "../../utils/helpers/cn";

type TAnyCarouselProps = {
  childrenArray: Array<React.ReactNode>;
  indicatorSize?: number;
  baseColor?: string;
  selectedColor?: string;
  indicatorGap?: number;
};

//this carousel works with any type of data eg. text, image, etc.

const AnyCarousel = ({
  childrenArray,
  indicatorSize = 14,
}: TAnyCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArrayMap = childrenArray?.map((_, idx) => (
    <Circle
      size={indicatorSize}
      onClick={() => setCurrentIndex(idx)}
      key={idx}
      className={cn({ "cursor-pointer text-red-400": idx === currentIndex })}
    />
  ));
  return (
    <div className="flex flex-col items-center">
      <div>{childrenArray[currentIndex]}</div>
      <div className="flex gap-2 items-center">
        {currentIndex > 0 && (
          <MoveLeft
            size={indicatorSize}
            onClick={() => setCurrentIndex((prevState) => prevState - 1)}
          />
        )}
        <div className="flex gap-2">{childrenArrayMap}</div>
        {currentIndex < childrenArray.length - 1 && (
          <MoveRight
            size={indicatorSize}
            onClick={() => setCurrentIndex((prevState) => prevState + 1)}
          />
        )}
      </div>
    </div>
  );
};

export default AnyCarousel;

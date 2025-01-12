import React, { useState } from "react";
import { Circle } from "lucide-react";
import { cn } from "../../utils/helpers/cn";
import { defineConfig } from "vite";

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
  indicatorSize = 18,
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
      <div className="flex gap-1">{childrenArrayMap}</div>
    </div>
  );
};

export default AnyCarousel;

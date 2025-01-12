import React, { useState, useRef } from "react";
import interpolate from "../../utils/helpers/interpolate";

const DialSlider: React.FC = ({
  setValue,
}: {
  setValue: (count: number) => void;
}) => {
  const [angle, setAngle] = useState(0);
  const dialRef = useRef<HTMLDivElement>(null);

  const calculateAngle = (x: number, y: number) => {
    if (!dialRef.current) return 0;

    const rect = dialRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = x - centerX;
    const dy = y - centerY;

    return Math.atan2(dy, dx) * (180 / Math.PI) + 90; // Convert to degrees
  };

  const handleStart = (event: React.MouseEvent | React.TouchEvent) => {
    const isTouch = "touches" in event;
    const getCoordinates = (e: MouseEvent | TouchEvent) => {
      if ("touches" in e) {
        const touch = e.touches[0];
        return { x: touch.clientX, y: touch.clientY };
      } else {
        return { x: e.clientX, y: e.clientY };
      }
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const { x, y } = getCoordinates(e);
      const newAngle = calculateAngle(x, y);
      setAngle(newAngle);

      const newPetalCount = interpolate(Math.round(newAngle), {
        inputRange: [0, 360],
        outputRange: [6, 18],
        extrapolate: "extend",
      });

      setValue(Math.floor(newPetalCount));
    };

    const handleEnd = () => {
      document.removeEventListener("mousemove", handleMove as any);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleMove as any);
      document.removeEventListener("touchend", handleEnd);
    };

    const { x, y } = getCoordinates(event);
    const initialAngle = calculateAngle(x, y);
    setAngle(initialAngle);

    document.addEventListener("mousemove", handleMove as any);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchmove", handleMove as any);
    document.addEventListener("touchend", handleEnd);
  };

  return (
    <div className="flex flex-col items-center justify-center cursor-pointer">
      <div
        ref={dialRef}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        className="w-32 h-32 rounded-full bg-blue-500 relative"
        style={{
          transform: `rotate(${angle}deg)`,
        }}
      >
        {/* Dial pointer */}
        <div
          className="w-1 h-8 bg-white absolute top-0 left-1/2 transform -translate-x-1/2 rounded-md"
          style={{ transform: "translateX(-50%)" }}
        ></div>
      </div>
      <p className="mt-4 text-lg font-semibold text-gray-700">
        Angle: {Math.round(angle)}°
      </p>
    </div>
  );
};

export default DialSlider;

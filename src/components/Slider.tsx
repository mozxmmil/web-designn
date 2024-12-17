import React from "react";

const Slider = () => {
  return (
    <div className="slider w-full scrollbar h-[45%]  flex flex-nowrap overflow-auto scroll-smooth">
      <div className="elem1 w-1/2 h-full  flex-shrink-0  flex justify-center items-center font-medium text-6xl capitalize font-serif">
        <h1>treadling</h1>
      </div>
      <div className="elem1 w-1/2 h-full  flex-shrink-0  flex justify-center items-center font-medium text-6xl capitalize font-serif">
        <h1>Light</h1>
      </div>
      <div className="elem1 w-1/2 h-full  flex-shrink-0  flex justify-center items-center font-medium text-6xl capitalize font-serif">
        <h1>Fassion</h1>
      </div>
      <div className="elem1 w-1/2 h-full  flex-shrink-0  flex justify-center items-center font-medium text-6xl capitalize font-serif">
        <h1>Marvels</h1>
      </div>
    </div>
  );
};

export default Slider;

import React from "react";

const page = () => {
  return (
    <main className="w-full h-screen bg-white flex items-end ">
      <div className="leftBox  h-[90%] w-full px-32 flex flex-col justify-evenly  ">
        <div className="top h-[50%] w-full  text-9xl font-[Bahnschrift]">
          <h1 className="">
            a cotton <br /> weave
          </h1>
        </div>
        <div className="bottom  min-h-[30%]">
          <div className="top flex  items-center gap-2 border-2 w-fit px-3 py-2 rounded-3xl">
            <h1>Color</h1>
            <div className="flex items-center gap-1">
              <div className="h-4 w-4 bg-yellow-300 rounded-full"></div>
              <div className="h-4 w-4 bg-violet-600 rounded-full"></div>
            </div>
          </div>
          <div className="bottom  flex flex-col gap-4 pt-5 max-w-[80%]">
              <h1 className="font-bold text-2xl">Details</h1>
              <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, commodi dolorem, at architecto nisi aliquam praesentium natus nulla obcaecati amet et ex! Quae nemo vel enim obcaecati hic eaque natus?</h4>
          </div>
        </div>
      </div>
      <div className="rightBox bg-red-800 h-[90%] w-full "></div>
    </main>
  );
};

export default page;

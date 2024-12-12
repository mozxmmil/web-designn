import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const page = () => {
  return (
    <main className="w-full h-screen bg-white flex justify-between items-end   ">
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
            <h4>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
              commodi dolorem, at architecto nisi aliquam praesentium natus
              nulla obcaecati amet et ex! Quae nemo vel enim obcaecati hic eaque
              natus?
            </h4>
          </div>
        </div>
      </div>
      <div className="rightBox  h-[90%] w-full relative ">
        <div className="rightTop flex justify-between items-center py-3 w-full max-w-md">
          <h1 className="font-bold">$432</h1>
          <div className="flex justify-center gap-2 items-center text-yellow-200 ">
            <h1 className="pr-3 text-black font-bold ">Rating</h1>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <div></div>
          </div>
        </div>
        <div className="imageContainer bg-green-300 h-[92%] w-full max-w-md  relative ">
          <Image
            src={
              "https://images.unsplash.com/photo-1732823282166-2157bce662da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
            }
            fill
            alt="no more"
            className="object-cover"
            quality={75}
          />
        </div>
        <div className="blackbox h-10 w-10 px-10 flex top-1/2 right-52 items-center justify-center whitespace-nowrap absolute top py-10 rounded-full  bg-black text-white max-w-fit">
          <h1 className="text-sm font-bold">Shop Now</h1>
        </div>
        <h1 className="absolute text-4xl font-medium -rotate-90 -left-5 origin-left top-[80%]">Cotton twill Scarf</h1>
      </div>
    </main>
  );
};

export default page;

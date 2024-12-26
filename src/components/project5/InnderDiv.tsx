import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function InnderDiv() {
  return (
    <div className="innterdiv  h-full w-full relative">
      <video
        
        autoPlay
        muted
        poster="https://images.unsplash.com/photo-1572411269446-52544abbdb20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D"
        loop
        className="w-full h-full object-cover"
        src="/Dior.mp4"
      ></video>
      <div className="bottomSection absolute bottom-0 w-full md:h-[40%] h-[30%]  md:px-10 px-5 text-white">
        <div className="first  w-full md:h-[60%] h-[40%] flex justify-between items-center border-b-2  border-white pb-12   ">
          <h1 className="md:font-monument font-monument_R   md:text-6xl text-2xl  font-extralight">
            Photography <br />
            and film
          </h1>
          <h1 className="md:px-7 md:py-5 rounded-full border-2 md:w-20 md:h-20 flex h-10 w-10  items-center justify-center">
            01
          </h1>
        </div>
        <div className="second  w-full h-[40%] flex justify-between items-center ">
          <h1 className="md:font-medium font-normal">Explore</h1>
          <GoArrowRight className="md:h-10 md:w-10 h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

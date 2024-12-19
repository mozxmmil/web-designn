import React from "react";
import { GoArrowRight } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";

const page = () => {
  return (
    <main className="w-full h-screen bg-yellow-50 pt-[0.1px]">
      <nav className="w-full h-[10vh]  mt-10  border-black border-t-2 border-b-2 flex items-center justify-between px-20">
        <h1 className=' border-black h-full w-[25%]   flex justify-center items-center font-[Broadway] font-bold text-4xl after:content-["\00A9"] relative after:absolute  after:right-[25%] after:top-1 after:text-[1rem]'>
          primer
        </h1>
        <h2 className="border-r-2 border-black h-full w-[20%]   flex justify-center items-center font-gilroy_M font-bold text-2xl">
          Model
        </h2>
        <h2 className="border-r-2 border-black h-full w-[20%]   flex justify-center items-center font-gilroy_M font-bold text-2xl">
          Women/Men
        </h2>
        <h2 className="border-r-2 border-black h-full w-[29%]   flex justify-center items-center font-gilroy_M font-bold text-2xl">
          Agency/Blog/Information
        </h2>
        <IoMdSearch className="border-black h-1/2 w-[10%] flex justify-center items-center font-thin" />
      </nav>
      <section className="w-full h-[84.5vh]  p-14 relative">
        <div className="innterdiv  h-full w-full relative">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            src="/Dior.mp4"
          ></video>
          <div className="bottomSection absolute bottom-0 w-full h-[40%] px-10 text-white">
            <div className="first  w-full h-[60%] flex justify-between items-center border-b-2 border-white pb-5 ">
              <h1 className="font-monument  text-6xl font-bold">
                Photography <br />
                and film
              </h1>
              <h1 className="px-7 py-5 rounded-full border-2 w-20 h-20 flex items-center justify-center">
                01
              </h1>
            </div>
            <div className="second  w-full h-[40%] flex justify-between items-center ">
              <h1 className="font-medium">Explore</h1>
              <GoArrowRight className="h-10 w-10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;

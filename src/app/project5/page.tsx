import { Alphabet, ImageSlider } from "@/utils/SliderImage";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";

const page = () => {
  return (
    <main className="w-full min-h-screen bg-yellow-50 pt-[0.1px]">
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
      <section className="w-full h-[84.5vh]  bg-yellow-50 p-14 relative">
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
              <h1 className="font-monument  text-6xl font-extralight">
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
      <section className="w-full h-screen ">
        <div className="slider  w-full h-[30%] flex items-center gap-10 flex-nowrap overflow-x-hidden">
          <div className="slider-content flex gap-10 animate-slider">
            {ImageSlider.map((val, index) => (
              <div
                key={index}
                className="circle h-32 w-32 bg-yellow-500 rounded-full relative overflow-hidden "
              >
                <Image
                  src={val.url}
                  alt="not"
                  fill
                  className="object-cover"
                  quality={20}
                />
              </div>
            ))}
          </div>
          <div className="slider-content flex gap-10 animate-slider">
            {ImageSlider.map((val, index) => (
              <div
                key={index}
                className="circle h-32 w-32 bg-yellow-500 rounded-full relative overflow-hidden "
              >
                <Image src={val.url} alt="not" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="alphabet  font-Gilroy_R font-bold w-full h-[15%]  border-t-2 border-b-2 border-black flex items-center gap-10 justify-between px-5 ">
          <h1 className="text-3xl underline tracking-[6px]">All</h1>
          {Alphabet.map((value, index) => (
            <h6 className="" key={index}>
              {value}
            </h6>
          ))}
        </div>
        <div className="PhotoSection  h-screen p-10 flex items-center gap-5 justify-center bg-yellow-50">
          <div className="left w-1/2 h-full  ">
            <div className="w-full h-[90%] relative">
              <Image
                src={
                  "https://images.unsplash.com/photo-1702884163621-ded464345868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D"
                }
                fill
                className="object-cover"
                alt="not"
              />
            </div>
            <h1 className="font-monument text-2xl w-full flex justify-center items-center h-[10%]">
              vogue / shot
            </h1>
          </div>
          <div className="right w-[45%] h-full ">
            <div className="top w-full h-[70%]  relative">
              <Image
                src={
                  "https://plus.unsplash.com/premium_photo-1725400826922-39ffcf68f736?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D"
                }
                alt="not"
                fill
                className="object-cover"
                quality={20}
              />
            </div>
            <div className="bottom flex w-full justify-between  py-5 bg-slate-500 ">
              <h1 className="font-gilroy_M text-xl font-bold ">
                Hannah Mother <br /> features in a <br /> fashion store by{" "}
                <br /> the lake for <br /> vogue new shot
              </h1>
              <h4 className="w-1/2 font-Gilroy_R">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                eveniet, quas consectetur cupiditate totam optio voluptatem in
                nam modi praesentium!
              </h4>
            </div>
          </div>
        </div>
        <div className="thirdPage w-full h-screen bg-yellow-50"></div>
      </section>
    </main>
  );
};

export default page;

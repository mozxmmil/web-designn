import { Alphabet, HoverList, ImageSlider } from "@/utils/SliderImage";
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
      <section className="w-full h-screen  "> 
        {/* todo: i have to fix this slider bug tomorrow */}
        <div className="slider w-full h-[30%] flex items-center gap-10 whitespace-nowrap overflow-hidden animate-slider">
          <div className="flex">
            {[...ImageSlider, ...ImageSlider].map((val, index) => (
              <div
                key={index}
                className="circle h-32 w-32 transition-all duration-200 ease-linear bg-yellow-500 rounded-full shrink-0 relative overflow-hidden"
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
            <div className="bottom flex w-full justify-between  py-5  ">
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
        <div className="thirdPage w-full h-fit  px-10 bg-yellow-50">
          <h1 className="w-full  text-center font-monument text-6xl mb-16 uppercase">
            Update
          </h1>
          {HoverList.map((value, index) => (
            <div
              key={index}
              className="updateSection w-full h-[15vh] group hover:bg-yellow-100  transition-colors  duration-300 ease-out border-t-2 border-black flex justify-between items-center px-5 relative"
            >
              <div className="w-[110px] h-[110px] left-[10%] group-hover:opacity-100 opacity-0 transition-all ease-in-out group-hover:left-[20%] rounded-full overflow-hidden  absolute duration-500 ">
                <Image
                  src={value.photo}
                  className="  object-cover "
                  fill
                  quality={50}
                  alt="note"
                />
              </div>

              <h1 className=" w-[5%] font-Gilroy_R font-bold tracking-wide uppercase">
                {value.name}
              </h1>
              <div className="0 w-1/2 font-medium text-5xl font-gilroy_M">
                <h1 className="font-bold">{value.tag}</h1>
                <h5 className="text-sm">{value.date}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="fourthPage w-full h-screen bg-yellow-50  border-black pt-[0.1px] ">
          <div className="slider whitespace-nowrap overflow-x-hidden overflow-y-hidden p-5 border-black border-t-2 border-b-2 mt-10">
            <h1 className="inline-block animate-slider1 mr-10 text-7xl  font-monument text-stroke text-transparent  ">
              premier model 2024
            </h1>
            <h1 className="inline-block animate-slider1  mr-10 text-7xl  font-monument text-stroke text-transparent  ">
              premier model 2024
            </h1>
            <h1 className="inline-block animate-slider1  mr-10 text-7xl  font-monument text-stroke text-transparent  ">
              premier model 2024
            </h1>
            <h1 className="inline-block animate-slider1  mr-10 text-7xl  font-monument text-stroke text-transparent  ">
              premier model 2024
            </h1>
            <h1 className="inline-block animate-slider1  mr-10 text-7xl  font-monument text-stroke text-transparent  ">
              premier model 2024
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;

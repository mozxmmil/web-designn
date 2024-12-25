import { HoverList } from '@/utils/SliderImage'
import Image from 'next/image'
import React from 'react'

const ThirdPage_HowerSection  = () => {
  console.log("hii")
  return (
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
                  quality={40}
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
  )
}

export default ThirdPage_HowerSection 

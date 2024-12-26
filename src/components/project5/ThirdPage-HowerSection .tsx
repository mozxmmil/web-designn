import { HoverList } from '@/utils/SliderImage'
import Image from 'next/image'
import React from 'react'

const ThirdPage_HowerSection  = () => {
  
  return (
          <div className="thirdPage w-full md:h-fit  md:px-10  relative mt-20 md:mt-0">
          <h1 className="w-full  text-center font-monument md:text-6xl text-3xl md:mb-16 mb-5 uppercase">
            Update
          </h1>
          {HoverList.map((value, index) => (
            <div
              key={index}
              className="updateSection w-full md:h-[15vh]  group hover:bg-yellow-100  transition-colors  duration-300 ease-out border-t-2 border-black flex justify-between items-center px-5 relative"
            >
              <div className="md:w-[110px] md:h-[110px] w-[50px] h-[50px]  left-[10%] group-hover:opacity-100 opacity-0 transition-all ease-in-out md:group-hover:left-[20%] group-hover:left-[28%] rounded-full overflow-hidden  absolute duration-500 ">
                <Image
                  src={value.photo}
                  className="  object-cover "
                  fill
                  quality={30}
                  alt="note"
                />
              </div>

              <h1 className=" w-[5%] font-Gilroy_R font-bold tracking-wide uppercase">
                {value.name}
              </h1>
              <div className="0 w-1/2 font-medium md:text-5xl text-xl font-gilroy_M">
                <h1 className="md:font-bold font-semibold">{value.tag}</h1>
                <h5 className="text-sm">{value.date}</h5>
              </div>
            </div>
          ))}
        </div>
  )
}

export default ThirdPage_HowerSection 

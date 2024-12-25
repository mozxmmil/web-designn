import Image from 'next/image'
import React from 'react'

const ImageAndtextSection = () => {
  return (
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
  )
}

export default ImageAndtextSection

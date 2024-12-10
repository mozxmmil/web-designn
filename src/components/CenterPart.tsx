import Link from 'next/link'
import React from 'react'
import { TfiArrowTopRight } from 'react-icons/tfi'

const CenterPart = () => {
  return (
          <div className="centerDiv  p-10">
          <h1 className="text-8xl leading-[90px] font-[Anta]">
            Light padded <br /> quality jacked in <br /> recycled polyster.
          </h1>
          <div className="2ndCenterdiv  flex justify-between  mt-5 ">
            <div className="left max-w-[50%] ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                doloremque nostrum rerum est sint et quasi tempore, aperiam
                magni? Sapiente laudantium soluta sit, debitis modi corrupti
                asperiores perspiciatis facilis voluptatem.
              </p>
            </div>
            <div className="right flex flex-col  w-[20%]   gap-5  ">
              <div className="pt-5 border-t-2 border-black flex justify-between items-center group ">
                <Link className="" href={"#"}>
                  Add to Card
                </Link>
                <div className="hidden group-hover:block transition-all duration-1000 ease-in-out">
                  <TfiArrowTopRight />
                </div>
              </div>
              <div className="pt-5 border-t-2 border-black flex justify-between items-center group">
                <Link className="" href={"#"}>
                  Product Details
                </Link>
                <div className="hidden  group-hover:block transition-all duration-1000">
                  <TfiArrowTopRight />
                </div>
              </div>
              <div className="pt-5 border-t-2 border-black flex justify-between items-center group">
                <Link className="" href={"#"}>
                  Shopping
                </Link>
                <div className="hidden group-hover:block  transition-all duration-1000">
                  <TfiArrowTopRight />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CenterPart

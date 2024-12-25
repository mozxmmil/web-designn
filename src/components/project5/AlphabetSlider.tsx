import { Alphabet } from '@/utils/SliderImage'
import React from 'react'

const AlphabetSlider = () => {
  return (
          <div className="alphabet  font-Gilroy_R font-bold w-full h-[15%]  border-t-2 border-b-2 border-black flex items-center gap-10 justify-between px-5  overflow-x-auto">
          <h1 className="text-3xl underline tracking-[6px]">All</h1>
          {Alphabet.map((value, index) => (
            <h6 className="" key={index}>
              {value}
            </h6>
          ))}
        </div>
  )
}

export default AlphabetSlider

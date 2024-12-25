import { Alphabet } from '@/utils/SliderImage'
import React from 'react'

const AlphabetSlider = () => {
  return (
          <div className="alphabet SliderAlphabet font-Gilroy_R font-bold w-full md:h-[15%] h-[10%]  border-t-2 border-b-2 border-black flex items-center md:gap-10 gap-5 justify-between px-5  overflow-x-auto">
          <h1 className="md:text-3xl text-xl underline md:tracking-[6px] tracking-[3px]">All</h1>
          {Alphabet.map((value, index) => (
            <h6  key={index}>
              {value}
            </h6>
          ))}
        </div>
  )
}

export default AlphabetSlider

import { ImageSlider } from "@/utils/SliderImage";
import Image from "next/image";
import React from "react";
import { memo } from "react";
interface ImagePropes {
  url: string;
}

const ImageComp: React.FC<ImagePropes> = memo(({ url }) => (
  <div className="circle h-32 w-32   rounded-full  relative overflow-hidden  ">
    <Image src={url} alt="not" fill className="object-cover" quality={10} />
  </div>
));

ImageComp.displayName = "ImageComponent";

const Slider2 = () => {
  return (
    <div className="w-full  flex gap-5 overflow-x-hidden overflow-y-hidden  mb-5   relative">
      <div className="flex gap-5  animate-slider items-center justify-center ">
        {[...ImageSlider, ...ImageSlider].map((value, index) => (
          <ImageComp key={index} url={value.url} />
        ))}
      </div>
      <div className="flex gap-5 animate-slider items-center justify-center ">
        {[...ImageSlider, ...ImageSlider].map((value, index) => (
          <ImageComp key={index} url={value.url} />
        ))}
      </div>
    </div>
  );
};

export default Slider2;

import React, { HTMLAttributes } from "react";
import { InnerDivImage, SliderItem } from "./SliderItem";
import { ImageSlider } from "@/utils/SliderImage";
import Image from "next/image";
interface Props extends HTMLAttributes<HTMLDivElement> {
  animation: "leftToRight" | "rightToLeft" | "none";
}
export const SliderItemWrapper: React.FC<Props> = ({ animation }) => {
  return (
    <>
      <SliderItem animation={animation}>
        {ImageSlider.map((value, index) => (
          <InnerDivImage key={index}>
            <Image src={value.url} alt="no" fill className="object-cover" loading="lazy" quality={20} />
          </InnerDivImage>
        ))}
      </SliderItem>
      <SliderItem animation={animation}>
        {ImageSlider.map((value, index) => (
          <InnerDivImage key={index}>
            <Image src={value.url} alt="no" fill className="object-cover" />
          </InnerDivImage>
        ))}
      </SliderItem>
    </>
  );
};

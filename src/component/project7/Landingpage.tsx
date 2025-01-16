"use client";
import { GsapLandingImage, useGsapLanding } from "@/hook/useGsapNav";
import { LandingpageImage } from "@/utils/SliderImage";
import { twclx } from "@/utils/TailwindUtils";
import Image from "next/image";
import React, { HtmlHTMLAttributes, useRef } from "react";

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Landingpage: React.FC<Props> = ({ className }) => {
  const im = useRef<HTMLHeadingElement>(null);
  const name = useRef<HTMLHeadingElement>(null);
  const web = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<(HTMLDivElement | null)[]>([]);
  // console.log(imageRef.current);
  // console.log(web.current)
  // todo kal animation ka dekhna hia kaise krena hai fix bug
  console.log(imageRef);
  useGsapLanding([im, name, web]);

  GsapLandingImage(imageRef.current);
  return (
    <div
      className={twclx(
        " landing w-full  h-[calc(100vh_-_80px)] relative flex justify-center items-center ",
        className
      )}
    >
      <div className="text-8xl  font-semibold font-gilroy_M relative ">
        <div className="relative z-10">
          <h1 ref={im} className="">
            HELLO I&apos;M
          </h1>
          <h1 ref={name} className="pl-[10rem]">
            MUZAMMIL&apos; ANSARI
          </h1>
          <h1 ref={web} className="text-center">
            WEB DEV.
          </h1>
        </div>

        {LandingpageImage.map((img, inx) => {
           // Har card ke liye unique rotation value

          return (
            <div
              ref={(refelem) => {
                if (refelem) imageRef.current[inx] = refelem;
              }}
              key={inx}
              className={twclx(
                `absolute top-0 left-1/2 h-80 w-44 overflow-hidden rounded-xl opacity-0 `
              )}
            >
              <Image src={img.url} alt="hero" fill className="object-cover" sizes="fill" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

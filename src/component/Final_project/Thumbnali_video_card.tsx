"use client";
import { twclx } from "@/utils/TailwindUtils";

import Image from "next/image";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

interface props {
  className?: string;
}

const Thumbnali_video_card = forwardRef<HTMLDivElement, props>(
  ({ className }, ref) => {
    const [play, setPlay] = useState<boolean>(false);
    const div = useRef<HTMLDivElement | null>(null);
    const circle = useRef<HTMLDivElement | null>(null);
    const video = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
      const element = div.current;
      if (!element || !circle.current) return;
      const xto = gsap.quickTo(circle.current, "x");
      const yto = gsap.quickTo(circle.current, "y");
      const circleSize = 80 / 2;
      const mouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { top, left } = element.getBoundingClientRect();
        const x = clientX - left - circleSize;
        const y = clientY - top - circleSize;
        xto(x);
        yto(y);
      };
      const mouseLeave = () => {
        xto(0);
        yto(0);
      };
      const clickFunction = () => {
        console.log("clicked");
        if (video.current) {
          if (video.current.paused) {
            video.current.play();
          } else {
            video.current.pause();
          }
          setPlay((prev) => !prev);
        }
      };
      element.addEventListener("mousemove", mouseMove);
      element.addEventListener("mouseleave", mouseLeave);
      element.addEventListener("click", clickFunction);

      return () => {
        element.removeEventListener("mousemove", mouseMove);
        element.removeEventListener("mouseleave", mouseLeave);
        // element.removeEventListener("click", clickFunction);
      };
    }, []);

    return (
      <div
        ref={div}
        className={twclx(
          "video h-[50vh] w-[50vw] bg-white relative group overflow-hidden cursor-none",
          className
        )}
      >
        <div
          ref={circle}
          className="roundCursor w-20 h-20 bg-yellow-400 absolute top-0 left-0 rounded-full pointer-events-none flex items-center justify-center z-40"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {play ? <FaPlay /> : <FaPause />}
        </div>
        <div
          ref={ref}
          className="thumbnail  absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-400 group-hover:opacity-0 transition-all duration-1000 z-10"
        >
          <div className="w-full h-full relative ">
            <Image
              src={
                "https://images.unsplash.com/photo-1648270694882-a89bf37abd37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
              }
              fill
              className="object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="videoContainer w-full h-full relative  z-0 ">
          <video
            ref={video}
            className="w-full h-full object-cover absolute"
            src="/Obys-Showreel-2024.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    );
  }
);

Thumbnali_video_card.displayName = "Thumbnali_video_card";
export default Thumbnali_video_card;

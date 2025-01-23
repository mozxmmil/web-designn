"use client";
import { useGsapLadingText } from "@/hook/useGsapNav";
import React, { useRef } from "react";

const MainLanding_page = () => {
  const h1 = useRef<HTMLDivElement | null>(null);
  const h2 = useRef<HTMLDivElement | null>(null);
  const h3 = useRef<HTMLDivElement | null>(null);
  const h4 = useRef<HTMLDivElement | null>(null);

  useGsapLadingText([h1, h2, h3, h4]);
  return (
    <div className=" w-full h-[calc(100vh_-_4rem)]  relative">
      <div className="textPart uppercase font-semibold text-8xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden">
          <h1 ref={h1}>we design</h1>
        </div>
        <div className="overflow-hidden">
          <h1 ref={h2}>unique</h1>
        </div>
        <div className="overflow-hidden">
          <h1 ref={h3}>web/graphic</h1>
        </div>
        <div className="overflow-hidden">
          <h1 ref={h4}>experience</h1>
        </div>
      </div>
    </div>
  );
};

export default MainLanding_page;

"use client";
import { CounterNumber } from "@/component/Final_project/CounterNumber";
import { useCounter } from "@/hook/useCounter";
import { useGsapLandingImage } from "@/hook/useGsapNav";
import { useEffect, useRef } from "react";

export default function Loading() {
  const first = useRef<HTMLDivElement | null>(null);
  const second = useRef<HTMLDivElement | null>(null);
  const third = useRef<HTMLDivElement | null>(null);
  const div = useRef<HTMLDivElement | null>(null);
  const now = useRef<HTMLDivElement | null>(null);
  const page = useRef<HTMLDivElement | null>(null);
  useGsapLandingImage({
    refs: [first, second, third],
    htmlDiv: [div],
    now,
    page
  });

  const { counter, startIncrement } = useCounter();
  useEffect(() => {
    startIncrement();
  });

  return (
    <div ref={page} className="w-full h-screen bg-black text-white    ">
      <div
        ref={div}
        className="textContainer text-[6vw] font-semibold leading-tight uppercase font-gilroy_M  pt-36 pl-36"
      >
        <div className="texts  h-fit overflow-hidden flex justify-start items-center gap-10">
          <CounterNumber counter={counter} />
          <h1 ref={first}>Your</h1>
        </div>
        <div className="texts  h-fit overflow-hidden">
          <h1 ref={second}>web experience</h1>
        </div>
        <div className="texts  h-fit overflow-hidden flex justify-start items-center gap-10">
          <h1 ref={third}>is loading right</h1>
          <div>
            <h1 ref={now}>now</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

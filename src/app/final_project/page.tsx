"use client";
import Landing_page from "@/component/Final_project/Landing_page";
import React, { useRef } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import Coursor from "@/component/Final_project/Coursor";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import { useCoursor } from "@/hook/useGsapNav";

export const metadeta: Metadata = {
  title: "Portfolio",
  icons: {
    icon: "/",
  },
};

const Page = () => {
  const cour = useRef<HTMLDivElement | null>(null);

  useCoursor(cour);
  return (
    <div className="h-full w-full bg-zinc-700 relative overflow-hidden ">
      <Coursor ref={cour} />
      <Loading />
      <Landing_page />
    </div>
  );
};

export default Page;

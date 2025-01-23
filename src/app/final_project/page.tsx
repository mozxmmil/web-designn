"use client";
import Landing_page from "@/component/Final_project/Landing_page";
import React, { useRef,  } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import Coursor from "@/component/Final_project/Coursor";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const metadeta: Metadata = {
  title: "Portfolio",
  icons: {
    icon: "/",
  },
};

const Page = () => {
  const cour = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const handleMouse = (e: MouseEvent) => {
      if (cour.current) {
        gsap.to(cour.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power1.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  });

  return (
    <div className="h-full w-full bg-zinc-700 relative overflow-hidden">
      <Coursor ref={cour} />
      <Loading />
      <Landing_page />
    </div>
  );
};

export default Page;

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
gsap.registerPlugin(useGSAP);

const Magnetic = ({ children }: React.PropsWithChildren) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const element = ref.current;

    if (!element) return;

    // Optimize quick setters for performance
    const quickSetX = gsap.quickTo(element, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const quickSetY = gsap.quickTo(element, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseEnter = (e: MouseEvent) => {
      const bounds = element.getBoundingClientRect();
      const x = e.clientX - (bounds.left + bounds.width / 2);
      const y = e.clientY - (bounds.top + bounds.height / 2);

      quickSetX(x);
      quickSetY(y);
    };

    const handleMouseLeave = () => {
      quickSetX(0);
      quickSetY(0);
    };

    // Add event listeners
    element.addEventListener("mousemove", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on unmount
    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      {children}
    </div>
  );
};

export default Magnetic;

import { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
const tl = gsap.timeline();
export function useGsapNav(refs: RefObject<HTMLDivElement | null>[]) {
  useGSAP(() => {
    refs.forEach((ref) => {
      if (ref.current) {
        tl.from(ref.current, {
          y: -50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.2,
          scale: 0,
        });
      }
    });
  });
}

export function useGsapLanding(refs: RefObject<HTMLDivElement | null>[]) {
  useGSAP(() => {
    refs.forEach((ref) => {
      if (ref.current) {
        tl.from(ref.current, {
          y: 20,
          opacity: 0,
          duration: 0.2,
          stagger: 0,
          ease: "power1.out",
        });
      }
    });
  });
}

export function GsapLandingImage(refs: (HTMLDivElement | null)[]) {
  useGSAP(() => {
    refs.forEach((ref, inx) => {
      console.log(ref);
      if (ref) {
        tl.fromTo(
          ref,
          {
            rotate: 0,
          },
          {
            rotate: (inx + 1) * 10,
            opacity: 1,
            duration: 0.4,
            stagger: 0.3,
            ease: "power1.inOut",
          }
        );
      }
    });
  });
}

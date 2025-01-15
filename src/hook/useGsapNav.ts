import { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);


function useGsapNav(refs: RefObject<HTMLDivElement | null>[]) {
  useGSAP(() => {
    const tl = gsap.timeline();
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

export default useGsapNav;

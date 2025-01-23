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
interface Props {
  refs: RefObject<HTMLDivElement | null>[];
  htmlDiv: RefObject<HTMLDivElement | null>[];
  now: RefObject<HTMLDivElement | null>;
  page: RefObject<HTMLDivElement | null>;
}
export function useGsapLandingImage({ refs, htmlDiv, now, page }: Props) {
  useGSAP(() => {
    const timeline = gsap.timeline();
    refs.forEach((ref) => {
      if (ref.current) {
        timeline.from(ref.current, {
          opacity: 0,
          y: 100,
          duration: 0.5,
          delay: 0.25,
          stagger: 0.25,
        });
      }
    });
    timeline.from(now.current, {
      webkitTextStroke: "1px white",
      color: "transparent",
      duration: 1,
      delay: 0.5,
      ease: "power1.out",
    });
    htmlDiv.forEach((ref) => {
      if (ref.current) {
        timeline.to(ref.current, {
          opacity: 0,
        });
      }
    });
    timeline.to(page.current, {
      y: "-100vh",
      duration: 0.5,
      display: "none",
      ease: "power1.out",
    });
  });
}

export function useGsapLadingText(refs: RefObject<HTMLDivElement | null>[]) {
  useGSAP(() => {
    refs.forEach((ref) => {
      if (ref.current) {
        gsap.from(ref.current, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: 5,
          stagger: 0.2,
        });
      }
    });
  });
}
export function useCoursor(
  refs: RefObject<HTMLDivElement | null>,
  mouseEvent: MouseEvent
) {
  useGSAP(() => {
    gsap.to(refs.current, {
      x: mouseEvent.clientX,
      y: mouseEvent.clientY,

      duration: 0.5,
      ease: "power1.out",
    });
  });
}

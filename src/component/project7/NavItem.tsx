import { twclx } from "@/utils/TailwindUtils";
import React, { forwardRef } from "react";

interface Props {
  className?: string;
}

export const Logo = forwardRef<HTMLDivElement, Props>(({ className }, ref) => {
  return (
    <div ref={ref} className={twclx("font-monument_R text-2xl tracking-wide ", className)}>
      <h1>Mozammil</h1>
    </div>
  );
});
Logo.displayName = "Logo";

export const Instagram = forwardRef<HTMLDivElement, Props>(
  ({ className }, ref) => {
    return (
      <div ref={ref} className={twclx("font-gilroy_M text-xl ", className)}>
        Instagram
      </div>
    );
  }
);
Instagram.displayName = "Instagram";

export const Gallery = forwardRef<HTMLDivElement, Props>(
  ({ className }, ref) => {
    return (
      <div ref={ref} className={twclx("font-gilroy_M text-xl", className)}>
        Gallery
      </div>
    );
  }
);
Gallery.displayName = "Gallery";

export const Contact = forwardRef<HTMLDivElement, Props>(
  ({ className }, ref) => {
    return (
      <div ref={ref} className={twclx("font-gilroy_M text-xl  ", className)}>
        Contact
      </div>
    );
  }
);

Contact.displayName = "Contact";

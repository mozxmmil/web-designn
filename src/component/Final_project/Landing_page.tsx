import { twclx } from "@/utils/TailwindUtils";
import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef, HTMLAttributes } from "react";
import NavBar from "./NavBar";
import MainLanding_page from "./MainLanding_page";

const Landing_pageTW = cva("h-screen w-full ", {
  variants: {
    variant: {
      default: "bg-black",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof Landing_pageTW> {}

const Landing_page = forwardRef<HTMLDivElement, Props>(
  ({ className, variant, ...props }, ref) => (
    <section
      ref={ref}
      className={twclx(Landing_pageTW({ variant, className }))}
      {...props}
    >
      <NavBar />
      <MainLanding_page />
    </section>
  )
);

Landing_page.displayName = "Landing_page";
export default Landing_page;

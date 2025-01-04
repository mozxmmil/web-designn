import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { twclx } from "@/utils/TailwindUtils";

const LandingContent1Tw = cva(
  "relative left-1/2 -translate-x-1/2 px-3  text-center py-1 font-serif ",
  {
    variants: {
      variant: {
        default: "w-fit rounded-full bg-purple-300 shadow-lg shadow-purple-200/50",
        gradient: "w-fit rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white shadow-lg shadow-purple-400/50 glow",

      },
      
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof LandingContent1Tw> {}

const LandingContent1: React.FC<Props> = ({
  variant,
  className,
  children = "Over 3 million ready-to-work creatives!",
  ...props
}) => {
  return (
    <div
      className={twclx(LandingContent1Tw({ variant, className }))}
      {...props}
    >
      <h1>{children}</h1>
    </div>
  );
};

export default LandingContent1;

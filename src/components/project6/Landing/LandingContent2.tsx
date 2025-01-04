import { twclx } from "@/utils/TailwindUtils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const LandingContent2Tw = cva(
  " text-center text-6xl md:p-6 font-serif tracking-normal font-medium",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof LandingContent2Tw> {}

export const LandingContent2: React.FC<Props> = ({
  variant,
  className,
  ...props
}) => {
  return (
    <div
      className={twclx(LandingContent2Tw({ variant, className }))}
      {...props}
    >
      <h1>
        Work with the world&apos;s top <br /> creative talent.
      </h1>
    </div>
  );
};

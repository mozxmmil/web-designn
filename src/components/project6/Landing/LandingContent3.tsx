import { twclx } from "@/utils/TailwindUtils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
const LandingContent3Tw = cva(
  "bg-red-600 relative left-1/2 -translate-x-1/2 px-4 py-2 rounded-sm shadow-lg font-medium  w-fit",
  {
    variants: {
      variant: {
        default: "bg-yellow-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof LandingContent3Tw> {}

export const LandingContent3: React.FC<Props> = ({ variant, className }) => {
  return (
    <h1 className={twclx(LandingContent3Tw({ variant, className }))}>
      connect with million of top-rated designers & agencies around the world
    </h1>
  );
};

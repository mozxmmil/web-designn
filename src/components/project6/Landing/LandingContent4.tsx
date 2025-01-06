import { Button } from "@/components/ui/button";
import { twclx } from "@/utils/TailwindUtils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
const LandingContent4Tw = cva("flex justify-center  pt-6", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof LandingContent4Tw> {}

const LandingContent4: React.FC<Props> = ({ variant, className }) => {
  return (
    <div className={twclx(LandingContent4Tw({ variant, className }))}>
      <Button>Start hiring today</Button>
    </div>
  );
};

export default LandingContent4;

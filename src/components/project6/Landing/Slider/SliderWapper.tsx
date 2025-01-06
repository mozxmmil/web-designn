import { twclx } from "@/utils/TailwindUtils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
const SliderWapperTw = cva(
  "w-full min-h-52  overflow-x-hidden  overflow-y-hidden flex    gap-5 relative mt-7",
  {
    variants: {
      variant: {
        default: "",
      },
    },
  }
);
interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SliderWapperTw> {}

export const SliderWapper: React.FC<Props> = ({
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <div className={twclx(SliderWapperTw({ variant, className }))} {...props}>
      {children}
    </div>
  );
};

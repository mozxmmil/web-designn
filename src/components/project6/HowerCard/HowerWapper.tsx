import { twclx } from "@/utils/TailwindUtils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const HowerWapperTw = cva(
  "relative h-72 w-full bg-orange-600 rounded-lg overflow-hidden group hover:shadow-lg transition-all hover:cursor-pointer",
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
    VariantProps<typeof HowerWapperTw> {}

export const HowerWapper: React.FC<Props> = ({
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <div className={twclx(HowerWapperTw({ variant, className }))} {...props}>
      {children}
    </div>
  );
};

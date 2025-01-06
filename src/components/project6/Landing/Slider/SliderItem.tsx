import { twclx } from "@/utils/TailwindUtils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
const SliderItemTw = cva(
  "  w-full  flex   relative  justify-evenly items-center shrink-0  ",
  {
    variants: {
      animation: {
        none: "animate-none",
        rightToLeft: "animate-slider",
        leftToRight: "animate-sliderReverse",
      },
    },
    defaultVariants: {
      animation: "rightToLeft",
    },
  }
);

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SliderItemTw> {}

export const SliderItem: React.FC<Props> = ({
  animation,
  className,
  children,
  ...props
}) => {
  return (
    <div className={twclx(SliderItemTw({ animation, className }))} {...props}>
      {children}
    </div>
  );
};

const InnerDivImageTw = cva(
  " h-full w-fit gap-5  aspect-square bg-violet-400  relative shrink-0 rounded-2xl overflow-hidden cursor-pointer",
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
interface InnerImageProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof InnerDivImageTw> {}

export const InnerDivImage: React.FC<InnerImageProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  return (
    <div className={twclx(InnerDivImageTw({ variant, className }))} {...props}>
      {children}
    </div>
  );
};

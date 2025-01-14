import { twclx } from "@/utils/TailwindUtils";
import { cva, VariantProps } from "class-variance-authority";
import Image, { ImageProps } from "next/image";
import React from "react";

const ImageSectionTw = cva("object-cover group-hover:scale-105 transition-all duration-300", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
interface Props extends ImageProps, VariantProps<typeof ImageSectionTw> {}

export const ImageSection: React.FC<Props> = ({
  variant,
  className,
  ...props
}) => {
  return (
    <Image
      className={twclx(ImageSectionTw({ variant, className }))}
      {...props}
    />
  );
};

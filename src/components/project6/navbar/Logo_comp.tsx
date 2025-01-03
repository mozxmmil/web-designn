import { twclx } from "@/utils/TailwindUtils";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import React, { HtmlHTMLAttributes } from "react";
const Logo_compTW = cva("relative w-[40%]  flex justify-center items-center  ", {
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
  extends HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof Logo_compTW> {
  image: string;
}

export const Logo_comp: React.FC<Props> = ({ image, className, variant }) => {
  return (
    <div className={twclx(Logo_compTW({ variant, className }))}>
      <Image src={image} alt="not" height={100} width={100} className="cursor-pointer"  />
    </div>
  );
};

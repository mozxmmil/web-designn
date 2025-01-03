import { twclx } from "@/utils/TailwindUtils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { Navlist } from "./navLiset";
import Link from "next/link";

const navmenuProps = cva(
  "md:w-[40%]  relative flex gap-3 items-center font-gilroy_M",
  {
    variants: {
      varient: {
        default: "",
      },
      size: {
        default: "text-2xl",
      },
    },
    defaultVariants: {
      varient: "default",
      size: "default",
    },
  }
);
interface ManuProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navmenuProps> {}

export const Menu: React.FC<ManuProps> = ({ className, varient, size }) => {
  return (
    <div className={twclx(navmenuProps({ varient, size, className }))}>
      {Navlist.map((val, inx) => (
        <Link
          className=" transition-all ease-linear delay-100  font-medium group  hover:shadow-sm"
          key={inx}
          href={val.link}
        >
          <h1 className="text-lg whitespace-nowrap  transition-all ease-linear delay-100 group-hover:-translate-y-2 group-hover:scale-105 group-hover:font-semibold ">
            {val.name}
          </h1>
        </Link>
      ))}
    </div>
  );
};

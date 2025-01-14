import { twclx } from "@/utils/TailwindUtils";
import { cva, VariantProps } from "class-variance-authority";
import { Heart } from "lucide-react";
import React, { HTMLAttributes } from "react";

const BottomSectionTw = cva(
  "w-full h-[50%] absolute bg-gradient-to-b from-transparent to-zinc-700 bottom-0 left-0 text-white group-hover:animate-HowerAnimation opacity-0 group-hover:opacity-100 ",
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
    VariantProps<typeof BottomSectionTw> {
  name: string;
}

export const BottomSection: React.FC<Props> = ({
  variant,
  className,
  name,
}) => {
  return (
    <div className={twclx(BottomSectionTw({ variant, className }))}>
      <div className="w-full  h-full p-2 flex justify-between items-center">
        <h1 className="font-monument_R">{name}</h1>
        <Heart className="bg-white text-black h-8 w-8 p-2 rounded-full " />
      </div>
    </div>
  );
};

import Image from "next/image";
import React, { HTMLAttributes } from "react";
import { Carditem } from "@/lib/cardData";
import { Button } from "@/components/ui/button";
import { twclx } from "@/utils/TailwindUtils";

interface CardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, keyof Carditem>,
    Carditem {}

const Card: React.FC<CardProps> = ({
  description,
  image,
  title,
  Instalk,
  id,
  ...props
}) => {
  return (
    <div
      {...props}
      id={id?.toString()}
      className="w-52 h-80 bg-red-50 rounded-md relative"
    >
      <div className="image relative h-[70%] w-full border-green-500">
        <Image src={image} fill className="object-cover" alt="image" />
      </div>
      <div className="textFooter h-[30%] w-full px-1">
        <h1 className="text-sm font-bold">{title}</h1>
        <p className="text-wrap text-sm leading-tight">{description}</p>
        <Button
          type="button"
          id={id?.toString()}
          className={twclx(
            "bg-blue-500 hover:bg-blue-600 mt-3",
            !Instalk && "bg-red-500 hover:bg-red-600"
          )}
        >
          {Instalk ? "In-stock" : "Out of stock"}
        </Button>
      </div>
    </div>
  );
};

export default Card;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Carditem } from "@/lib/cardData";
import { twclx } from "@/utils/TailwindUtils";

interface Props extends Carditem {
  handleAddtoCard: (id: number) => void;
}

export const Cardslider: React.FC<Props> = ({
  image,
  title,
  description,
  inStok,
  id,
  handleAddtoCard,
}) => {
  const handleAction = () => {
    if (id !== undefined) {
      handleAddtoCard(id);
    }
  };
  return (
    <div className="w-56 h-80 bg-orange-500 rounded-md shadow-xl  shadow-zinc-500 overflow-hidden ">
      <div className="imageCotainer w-full h-[70%] bg-green-400 relative ">
        <Image src={image} fill className="object-cover" alt="no image" />
      </div>
      <div className="textcontainer w-full bg-orange-400 h-[30%] relative ">
        <h1 className="text-sm font-bold px-2">{title}</h1>
        <p className="text-sm leading-none px-2">{description}</p>
        <Button
          onClick={handleAction}
          className={twclx(
            " w-full h-10 absolute bottom-0 rounded-none",
            inStok
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600"
          )}
        >
          Add to card
        </Button>
      </div>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { UserData } from "@/Types/inputCard";
import Image from "next/image";
import React, { useEffect } from "react";

interface Props extends UserData {
  handleDelete: (id: number) => void;
  inx: number;
}

export const Card: React.FC<Props> = ({
  Username,
  name,
  photo,
  handleDelete,
  inx,
}) => {

  useEffect(() => {
    console.log("component created");

    return () => {
      console.log("component is deleted");
    };
  },[]);
  const handleClick = () => {

    handleDelete(inx);
  };
  return (
    <div className="w-40 min-h-40 shadow-2xl bg-zinc-400 overflow-hidden rounded-md flex justify-start flex-col items-center pt-2">
      <div className="image h-10 w-10 bg-white rounded-full relative overflow-hidden ">
        <Image
          src={
            photo
              ? photo
              : "https://th.bing.com/th/id/OIP.SAcV4rjQCseubnk32USHigHaHx?rs=1&pid=ImgDetMain"
          }
          fill
          alt="no Image"
          className="object-cover"
        />
      </div>
      <div className="textArea pt-2 text-center w-full h-[calc(10rem_-2.5rem)] flex flex-col justify-between items-center">
        <div>
          <h1 className="font-bold text-center text-nowrap">{name}</h1>
          <span className="font-semibold text-zinc-500 text-center text-nowrap">
            {Username}
          </span>
          <p className="text-[12px]">Lorem ipsum dolor sit amet.</p>
        </div>
        <Button
          onClick={handleClick}
          className="w-full bg-red-500 hover:bg-red-600 rounded-none"
        >
          Remove It
        </Button>
      </div>
    </div>
  );
};

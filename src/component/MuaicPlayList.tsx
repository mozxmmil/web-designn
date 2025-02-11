import { Button } from "@/components/ui/button";
import { MusicPlaylist } from "@/lib/cardData";
import { twclx } from "@/utils/TailwindUtils";
import Image from "next/image";
import React from "react";

interface Props extends MusicPlaylist {
  handleAddfavorate: (id: number) => void;
}

const MuaicPlayList: React.FC<Props> = ({
  id,
  image,
  songName,
  SingerName,
  favorite,
  handleAddfavorate,
}) => {
  const handleClick = () => {
    handleAddfavorate(id);
  };
  return (
    <div className="w-52 h-32 bg-yellow-50 flex flex-col rounded-md justify-between  overflow-hidden shadow-md ">
      <div className="upperPart w-full h-2/3  flex justify-between items-start ">
        <div className="left relative w-1/2 h-full rounded-md  overflow-hidden ">
          <Image src={image} fill className="object-cover" alt="no" />
        </div>
        <div className="right pr-5 pt-2 font-bold text-wrap">
          <h1>{songName}</h1>
          <h1 className="font-normal text-sm font text-wrap text-nowrap">{SingerName}</h1>
        </div>
      </div>
      <div className="bottompart w-full  ">
        <Button
          onClick={handleClick}
          className={twclx("w-full", favorite ? "bg-pink-800" : "bg-pink-600")}
        >
          {favorite ? "Added" : "add to favorite"}
        </Button>
      </div>
    </div>
  );
};

export default MuaicPlayList;

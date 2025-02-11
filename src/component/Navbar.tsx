import { MusicPlaylist } from "@/lib/cardData";
import React from "react";

interface Props {
  musicData: MusicPlaylist[];
}

const Navbar: React.FC<Props> = ({ musicData }) => {
  return (
    <div className="w-full h-20 bg-pink-300 px-32 py-5 flex justify-between items-center">
      <h1 className="font-monument_R text-2xl ">music</h1>
      <div className="flex gap-4 items-center justify-center px-4 py-2 rounded-full bg-green-300 font-sans font-bold shadow-lg">
        <h1>Favorite</h1>
        <span>{musicData.filter((item) => item.favorite).length}</span>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import MuaicPlayList from "./MuaicPlayList";
import { MusicPlaylist } from "@/lib/cardData";

interface LandingPageProps {
  musicData: MusicPlaylist[];
  handleAddfavorate: (id: number) => void; // Ensure this is correctly typed
}

const LandingPage: React.FC<LandingPageProps> = ({ musicData,handleAddfavorate }) => {
  return (
    <div className="w-full h-[calc(100vh_-_80px)] bg-pink-200 px-32 flex-wrap flex  justify-evenly items-center">
      {musicData.map((item, inx) => (
        <MuaicPlayList key={inx} {...item} handleAddfavorate={handleAddfavorate} />
      ))}
    </div>
  );
};

export default LandingPage;

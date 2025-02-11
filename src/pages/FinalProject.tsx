"use client";
import LandingPage from "@/component/LandingPage";
import Navbar from "@/component/Navbar";
import { MusicPlaylist, musicPlaylist } from "@/lib/cardData";
import React, { useState } from "react";

const FinalProject = () => {
  const [musicData, setMusicData] = useState<MusicPlaylist[]>(musicPlaylist);

  const handleAddFavorite = (id: number) => {
    setMusicData((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      );
    });
  };
  return (
    <div className="w-full h-screen">
      <Navbar musicData={musicData} />
      <LandingPage
        musicData={musicData}
        handleAddfavorate={handleAddFavorite}
      />
    </div>
  );
};

export default FinalProject;

import React from "react";
import { HowerCard } from "../HowerCard/HowerCard";
import { HoverCardList } from "@/utils/SliderImage";
export const LandingPageComponent2: React.FC = () => {
  return (
    <section className="w-full min-h-[100vh] bg-white  flex flex-wrap  ">
      {HoverCardList.map((value, index) => (
        <HowerCard key={index} {...value} />
      ))}
    </section>
  );
};

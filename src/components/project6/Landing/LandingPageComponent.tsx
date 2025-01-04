import React from "react";
import LandingContent1 from "./LandingContent1";
import { LandingContent2 } from "./LandingContent2";
import { LandingContent3 } from "./LandingContent3";
import LandingContent4 from "./LandingContent4";

export const LandingPageComponent: React.FC = () => {
  return (
    <section className="w-full h-[calc(100vh-112px)] bg-zinc-200 pt-20">
      <LandingContent1 />
      <LandingContent2/>
      <LandingContent3/>
      <LandingContent4/>
    </section>
  );
};

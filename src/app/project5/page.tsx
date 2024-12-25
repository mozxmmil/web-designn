import AlphabetSlider from "@/components/project5/AlphabetSlider";
import ImageAndtextSection from "@/components/project5/ImageAndtextSection";
import InnderDiv from "@/components/project5/InnderDiv";
import NavBar from "@/components/project5/NavBar";
import ThirdPage_HowerSection from "@/components/project5/ThirdPage-HowerSection ";
import Slider2 from "@/components/Slider2";
import Slider3 from "@/components/Slider3";

import React from "react";

const page = () => {
  return (
    <main className="w-full min-h-screen bg-yellow-50 pt-[0.1px] relative overflow-x-hidden ">
      <NavBar />
      <section className="w-full md:h-[84.5vh]  bg-yellow-50 md:p-14 relative h-[50vh] pt-10">
        <InnderDiv />
      </section>
      <section className="w-full h-screen  ">
        <Slider2 />
        <AlphabetSlider />
        <ImageAndtextSection />
        <ThirdPage_HowerSection />
        <div className="fourthPage w-full h-screen bg-yellow-50  border-black pt-[0.1px] ">
          <Slider3 />
        </div>
      </section>
    </main>
  );
};

export default page;

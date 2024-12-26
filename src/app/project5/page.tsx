import React from "react";
import dynamic from "next/dynamic";
const AlphabetSlider = dynamic(
  () => import("@/components/project5/AlphabetSlider")
);
const ImageAndtextSection = dynamic(
  () => import("@/components/project5/ImageAndtextSection")
);
const InnderDiv = dynamic(() => import("@/components/project5/InnderDiv"));
const NavBar = dynamic(() => import("@/components/project5/NavBar"));
const ThirdPage_HowerSection = dynamic(
  () => import("@/components/project5/ThirdPage-HowerSection ")
);
const Slider2 = dynamic(() => import("@/components/Slider2"));
const Slider3 = dynamic(() => import("@/components/Slider3"));


const page = () => {
  return (
    <main className="w-full min-h-screen bg-yellow-50 pt-[0.1px] relative overflow-x-hidden ">
      <NavBar />
      <section className="w-full md:h-[84.5vh]  bg-yellow-50 md:p-14 relative h-[50vh] pt-10">
        <InnderDiv />
      </section>
      <section className="w-full   relative ">
        <Slider2 />
        <AlphabetSlider />
        <ImageAndtextSection />
        <ThirdPage_HowerSection />
        <div className="fourthPage w-full h-fit bg-yellow-50  border-black pt-[0.1px] ">
          <Slider3 />
        </div>
      </section>
    </main>
  );
};

export default page;

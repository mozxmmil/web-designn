import dynamic from "next/dynamic";
import { NavBar } from "@/components/project6/navbar/NavBar";
import { LandingPageComponent2 } from "@/components/project6/Landing2/LandingPageComponent2";

const LandingPageComponent = dynamic(
  () => import("@/components/project6/Landing/LandingPageComponent").then(mod=>mod.LandingPageComponent));

const Page = () => {
  return (
    <main className="w-full min-h-screen">
      <NavBar />
      <LandingPageComponent />
      <LandingPageComponent2/>
    </main>
  );
};

export default Page;

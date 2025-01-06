import dynamic from "next/dynamic";
import { NavBar } from "@/components/project6/navbar/NavBar";

const LandingPageComponent = dynamic(
  () => import("@/components/project6/Landing/LandingPageComponent").then(mod=>mod.LandingPageComponent));

const Page = () => {
  return (
    <main className="w-full min-h-screen">
      <NavBar />
      <LandingPageComponent />
      <div className="w-full h-screen bg-red-500">
      </div>
    </main>
  );
};

export default Page;

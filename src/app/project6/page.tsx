import { NavBar } from "@/components/project6/navbar/NavBar";
import dynamic from "next/dynamic";

const LandingPageComponent = dynamic(
  () => import("@/components/project6/Landing/LandingPageComponent").then(mod=>mod.LandingPageComponent),
  { ssr: false }
);

const Page = () => {
  return (
    <main className="w-full min-h-screen">
      <NavBar />
      <LandingPageComponent />
    </main>
  );
};

export default Page;

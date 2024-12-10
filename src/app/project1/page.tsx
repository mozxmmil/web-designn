import CenterPart from "@/components/CenterPart";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
const page = () => {
  return (
    <main className=" main w-full h-screen bg-white text-black">
      <header>
        <NavBar />
      </header>
      <section>
        <CenterPart />
      </section>
      <footer className="w-full bg-red-500 h-[40%] relative">
        <Footer />
      </footer>
    </main>
  );
};

export default page;

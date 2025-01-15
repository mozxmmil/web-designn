import {Landingpage} from "@/component/project7/Landingpage";
import Nav from "@/component/project7/Nav";
import React from "react";

const page = () => {
  return (
    <main className="h-screen w-full bg-zinc-800 text-white">
      <Nav />
      <Landingpage />
    </main>
  );
};

export default page;

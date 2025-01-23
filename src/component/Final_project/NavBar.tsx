import { Grip } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full h-16 flex justify-between items-center px-10 text-white">
      <div className="menubar flex justify-between items-center  gap-5">
        <Grip />
        <h1>Portfolio</h1>
      </div>
      <div className="flex items-center justify-between  gap-20 font-Gilroy_R font-bold">
        <Link href={"/home"}>Home</Link>
        <Link href={"/Contact"}>Contact</Link>
        <Link href={"/About"}>About</Link>
      </div>
    </nav>
  );
};

export default NavBar;

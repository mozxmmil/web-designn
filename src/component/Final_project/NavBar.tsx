import Megnetic from "@/Animation/Megnetic";
import { Grip } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full h-16 flex justify-between items-center px-10 text-white">
      <div className="menubar flex justify-between items-center  gap-5">
        <Megnetic>
          <Grip className="hover:cursor-pointer z-0 " />
        </Megnetic>
        <h1 className="z-0 hover:cursor-pointer">Portfolio</h1>
      </div>
      <div className="flex items-center justify-between  gap-20 font-Gilroy_R font-bold">
        <Megnetic>
          <Link className="z-0" href={"/home"}>
            Home
          </Link>
        </Megnetic>
        <Megnetic>
          <Link className="z-0  " href={"/Contact"}>
            Contact
          </Link>
        </Megnetic>
        <Megnetic>
          <Link className="z-0" href={"/About"}>
            About
          </Link>
        </Megnetic>
      </div>
    </nav>
  );
};

export default NavBar;

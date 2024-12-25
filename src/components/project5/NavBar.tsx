"use client";
import { Menu, Plus } from "lucide-react";
import React, { useState } from "react";

import { IoMdSearch } from "react-icons/io";
import { ToggleMenu } from "./ToggleMenu";

// type NavBarProps = {

// };

const NavBar: React.FC = () => {
  const [Toggle, setToggle] = useState<boolean>(false);
  return (
    <nav className="w-full md:h-[10vh] relative  md:mt-10  border-black border-t-2 border-b-2 flex items-center justify-between md:px-20 h-[8vh] mt-5 px-11">
      <h1 className=' border-black h-full w-[25%]  flex justify-center items-center font-[Broadway] font-bold text-4xl md:after:content-["\00A9"] relative after:absolute  after:right-[25%] after:top-1 after:text-[1rem]'>
        primer
      </h1>

      <h2 className="border-r-2 hidden  border-black h-full w-[20%]   md:flex justify-center items-center font-gilroy_M font-bold text-2xl ">
        Model
      </h2>
      <h2 className="border-r-2   border-black h-full w-[20%] hidden   md:flex justify-center items-center font-gilroy_M font-bold text-2xl">
        Women/Men
      </h2>
      <h2 className="border-r-2   border-black h-full w-[29%] hidden   md:flex justify-center items-center font-gilroy_M font-bold text-2xl">
        Agency/Blog/Information
      </h2>
      <IoMdSearch className="border-black h-1/2 w-[10%] hidden  md:flex justify-center items-center font-thin" />
      {!Toggle ? (
        <Menu
          onClick={() => setToggle(!Toggle)}
          className="text-2xl block md:hidden"
        />
      ) : (
        <Plus
          onClick={() => setToggle(!Toggle)}
          className="text-2xl block md:hidden rotate-45"
        />
      )}

      <ToggleMenu Toggle={Toggle} setToggle={setToggle} />
    </nav>
  );
};
export default NavBar;

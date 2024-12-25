import Link from "next/link";
import React, { useEffect, useRef } from "react";

interface Props {
  Toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleMenu: React.FC<Props> = ({ Toggle, setToggle }) => {
  const dropDown = useRef<HTMLDivElement>(null);

  function handleOutsideClick(e: MouseEvent) {
    if (dropDown.current && dropDown.current.contains(e.target as Node)) {
      setToggle(!Toggle);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <>
      {Toggle && (
        <div
          ref={dropDown}
          className="w-full h-fit r bg-yellow-50 absolute  left-0 animate-Toggle top-[8vh] z-50  flex flex-col  "
        >
          <Link href="#">
            <h2 className="border-b-2   border-black  w-full text-center py-3     font-gilroy_M font-bold text-2xl ">
              Model
            </h2>
          </Link>
          <Link href="#">
            <h2 className="border-b-2   border-black  w-full text-center py-3     font-gilroy_M font-bold text-2xl ">
              Women/Men
            </h2>
          </Link>
          <Link href="#">
            <h2 className="border-b-2   border-black  w-full text-center py-3     font-gilroy_M font-bold text-2xl ">
              Agency/Blog/Information
            </h2>
          </Link>
        </div>
      )}
    </>
  );
};

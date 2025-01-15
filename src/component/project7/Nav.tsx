"use client";
import React from "react";
import { Contact, Gallery, Instagram, Logo } from "./NavItem";
import { useRef } from "react";
import useGsapNav from "@/hook/useGsapNav";

const Nav = () => {
  const logo = useRef<HTMLDivElement>(null);
  const instagram = useRef<HTMLDivElement>(null);
  const gellery = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);
  useGsapNav([logo, instagram, gellery, contact]);
  return (
    <nav className="w-full h-20  flex justify-between items-center px-10 ">
      <Logo ref={logo} />
      <div className="flex items-center gap-10">
        <Instagram ref={instagram} />
        <Gallery ref={gellery} />
        <Contact ref={contact} />
      </div>
    </nav>
  );
};

export default Nav;

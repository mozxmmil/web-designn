"use client";
import React from "react";
import { Contact, Gallery, Instagram, Logo } from "./NavItem";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const Nav = () => {
  const logo = useRef(null);
  const instagram = useRef(null);
  const gellery = useRef(null);
  const contact = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(logo.current, {
      y: -50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      scale: 0,
      
      
    });
    tl.from(instagram.current, {
      y: -50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
    });
    tl.from(gellery.current, {
      y: -50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
    });
    tl.from(contact.current, {
      y: -50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
    });
  });
  return (
    <nav className="w-full h-20 bg-red-500 flex justify-between items-center px-10 ">
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

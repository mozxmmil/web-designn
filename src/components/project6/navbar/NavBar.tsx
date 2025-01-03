import React from "react";
import { Menu } from "./Menu";
import { Logo_comp } from "./Logo_comp";
import { Login_Signin } from "./Login_Signin";

export const NavBar: React.FC = () => {
  return (
    <nav className="w-full h-28 flex items-center justify-between px-5 relative">
      <Menu  />
      <Logo_comp image="https://logos-world.net/wp-content/uploads/2023/09/Dribbble-Logo.jpg" />
      <Login_Signin />
    </nav>
  );
};

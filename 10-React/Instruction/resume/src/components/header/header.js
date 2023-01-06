import React from "react";
import Avatar from "./avatar/avatar";
import MobileMenu from "./mobile-menu/mobile-menu";
import "./header.css";

const Header = () => {
  return (
    <header className="header pull-left">
      <MobileMenu />
      <Avatar />
    </header>
  );
};

export default Header;

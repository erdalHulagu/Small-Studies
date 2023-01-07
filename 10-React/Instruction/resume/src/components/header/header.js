import React from "react";
import Avatar from "./avatar/avatar";
import MobileMenu from "./mobile-menu/mobile-menu";
import "./header.css";
import Name from "./name/name";
import SocialIcons from "./social-icons/social-icons";
import MainNavbar from "./main-navbar/main-navbar";
import Copyright from "./copyright/copyright";

const Header = () => {
  return (
    <header className="header pull-left">
      <MobileMenu />
      <Avatar />
      <Name/>
      <SocialIcons/>
      <MainNavbar/>
      <Copyright/>
    </header>
  );
};

export default Header;

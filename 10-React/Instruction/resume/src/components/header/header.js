import React, { useRef, useState } from "react";
import Avatar from "./avatar/avatar";
import MobileMenu from "./mobile-menu/mobile-menu";
import "./header.css";
import Name from "./name/name";
import SocialIcons from "./social-icons/social-icons";
import MainNavbar from "./main-navbar/main-navbar";
import Copyright from "./copyright/copyright";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const refMenu = useRef();
  const handleMenu = () => { 
    if(!isOpen){
      refMenu.current.style.transform = "translateX(0)";
      setIsOpen(true);
    }
    else{
      refMenu.current.style.transform = "translateX(-260px)";
      setIsOpen(false);
    }
  }

  return (
    <header className="header pull-left" ref={refMenu}>
      <MobileMenu handleMenu={handleMenu}/>
      <Avatar />
      <Name/>
      <SocialIcons/>
      <MainNavbar/>
      <Copyright/>
    </header>
  );
};

export default Header;

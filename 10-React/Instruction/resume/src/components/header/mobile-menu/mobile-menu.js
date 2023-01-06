import React from "react";
import "./mobile-menu.css"; 

const MobileMenu = () => {
  return (
    <div className="mobile-bar visible-sm visible-xs">
      <div className="hamburger-menu">
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default MobileMenu;

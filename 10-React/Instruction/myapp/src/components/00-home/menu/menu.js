import React, { useState } from "react";
import { Button, Collapse, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import menu from "./menu.json";
import "./menu.scss";

const Menu = () => {
  const [target, setTarget] = useState(null);

  const handleCollapse = (e) => {
    e.target.classList.toggle("collapsed");
  };

  return (
    <nav className="main-nav">
      <ul>
        {menu.map((mainItem) => (
          <li
            key={mainItem.title}
            className={mainItem.children && "collapsable"}
          >
            {mainItem.children ? (
              <div onClick={handleCollapse}>{mainItem.title}</div>
            ) : (
              <div>
                <Link to={mainItem.to}>{mainItem.title}</Link>
              </div>
            )}

            {mainItem.children && (
              <ul>
                {mainItem.children.map((subItem) => (
                  <li key={subItem.title}>
                    <Link to={subItem.to}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Menu;

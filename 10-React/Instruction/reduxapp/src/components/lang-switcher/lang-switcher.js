import React from "react";
import { Dropdown } from "react-bootstrap";
import { langs } from "../../helpers/locale-helper";

const LangSwitcher = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {langs.map((item) => (
          <Dropdown.Item href="#/action-1" key={item.code}>
            <span className={`fi fi-${item.country}`}></span> {item.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LangSwitcher;

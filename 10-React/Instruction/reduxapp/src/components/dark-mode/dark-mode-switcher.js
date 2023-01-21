import React from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const DarkModeSwitcher = () => {
  const darkMode = useSelector( (state)=> state.theme.darkMode  )

  return (
    <div>
      <Form.Check type="switch" id="dmSwitch" label="Dark Mode"  checked={darkMode} />
    </div>
  );
};

export default DarkModeSwitcher;

import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../store/slices/theme-slice";

const DarkModeSwitcher = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div>
      <Form.Check
        type="switch"
        id="dmSwitch"
        label="Dark Mode"
        checked={darkMode}
        onChange={ ()=>  dispatch(setDarkMode(!darkMode))}
      />
    </div>
  );
};

export default DarkModeSwitcher;

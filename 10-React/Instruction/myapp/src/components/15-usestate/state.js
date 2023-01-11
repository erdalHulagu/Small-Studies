import React, { useState } from "react";
import { Button } from "react-bootstrap";

const State = () => {
  const [mode, setMode] = useState("light");

  let classNames = "bg-light text-dark p-5";

  if (mode === "dark") {
    classNames = "bg-dark text-light p-5";
  } 
  
  return (
    <div className={classNames}>
      <h1 className="text-center">Dark/Light Mode Switcher</h1>
      <div className="d-flex justify-content-evenly mt-5">
        <Button onClick={() => setMode("dark")}>Dark Mode</Button>
        <Button onClick={() => setMode("light")}>Light Mode</Button>
      </div>
    </div>
  );
};

export default State;

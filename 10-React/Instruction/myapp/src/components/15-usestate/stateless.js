import React from "react";
import { Button } from "react-bootstrap";

const Stateless = () => {
  let mode = "light";
  let classNames = "bg-light text-dark p-5";

  const setMode = (m) => {
    mode = m;

    if (mode === "dark") {
      classNames = "bg-dark text-light p-5";
    } else {
      classNames = "bg-light text-dark p-5";
    }

    //document.getElementById("switcher").setAttribute("class", classNames);

    console.log(mode);
    console.log(classNames);
  };

  console.log(classNames);

  return (
    <div id="switcher" className={classNames}>
      <h1 className="text-center">Dark/Light Mode Switcher</h1>
      <div className="d-flex justify-content-evenly mt-5">
        <Button onClick={() => setMode("dark")}>Dark Mode</Button>
        <Button onClick={() => setMode("light")}>Light Mode</Button>
      </div>
    </div>
  );
};

export default Stateless;

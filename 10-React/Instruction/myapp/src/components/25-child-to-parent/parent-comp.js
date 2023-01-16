import React, { useState } from "react";
import ChildComp from "./child-comp";

const ParentComp = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (val) => {
    console.log(val);

    setCounter((prev) => prev + val);
  };

  return (
    <div>
      <div>Counter: {counter}</div>
      <ChildComp handleCounter={handleCounter} />
    </div>
  );
};

export default ParentComp;

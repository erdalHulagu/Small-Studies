import React from "react";

const ChildComp = ({ handleCounter }) => {
  return (
    <div>
      <button onClick={() => handleCounter(10)}>Set Counter</button>
    </div>
  );
};

export default ChildComp;

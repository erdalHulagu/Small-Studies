import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (val) => { 
    if(val<0) val=0;

    setCounter(val);
   }

  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="info" onClick={() => handleClick(counter+1)}>
        <AiOutlinePlusCircle />
      </Button>
      <Button variant="light" disabled>
        {counter}
      </Button>
      <Button variant="warning" onClick={() => handleClick(counter-1)}  disabled={!counter}>
        <AiOutlineMinusCircle />
      </Button>
      <Button variant="danger" onClick={() => handleClick(0)} disabled={!counter}>
        <GrPowerReset />
      </Button>
    </ButtonGroup>
  );
};

export default Counter;

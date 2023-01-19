import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useStore } from "../store";
import { counterDown, counterUp } from "../store/counter/counter-actions";

const HomePage = () => {
    const {counterState, dispatchCounter} = useStore();
    const { counter} = counterState;


  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="warning" onClick={()=> dispatchCounter(counterDown())}>-</Button>
        <Button variant="secondary" disabled>{counter}</Button>
        <Button variant="info" onClick={()=> dispatchCounter(counterUp())}>+</Button>
      </ButtonGroup>
    </div>
  );
};

export default HomePage;

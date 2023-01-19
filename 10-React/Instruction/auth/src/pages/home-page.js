import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Right</Button>
      </ButtonGroup>
    </div>
  );
};

export default HomePage;

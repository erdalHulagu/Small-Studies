import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form1 = () => {
  const [name, setName] = useState("Galip");

  return (
    <Container className="mt-5">
      <Form>
        <h1>Merhaba {name}</h1>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </Form>
    </Container>
  );
};

export default Form1;

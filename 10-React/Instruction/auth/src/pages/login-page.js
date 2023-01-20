import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const API_BASE_URL = "https://carrental-v3-backend.herokuapp.com";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = { email, password };

    try {
        const resp = await axios.post(`${API_BASE_URL}/login`, payload);
        console.log(resp.data);
        
    } catch (err) {
        alert(err.response.data.message);
    }


  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;

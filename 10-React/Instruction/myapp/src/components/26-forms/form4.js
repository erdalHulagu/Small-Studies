import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form4 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  console.log(formData);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>İsim</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            placeholder="Adınızı giriniz"
            value={formData.firstName}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Soyisim</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Soyadınızı giriniz"
            value={formData.lastName}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Epostanızı giriniz"
            value={formData.email}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            name="phone"
            type="text"
            placeholder="Telefonunuzu giriniz"
            value={formData.phone}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Form4;

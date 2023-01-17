import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form5 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if(!formData.firstName) throw new Error("Adınızı giriniz");
      if(!formData.lastName) throw new Error("Soyadınızı giriniz");
      if(!formData.email) throw new Error("Epostanızı giriniz");
      if(!formData.phone) throw new Error("Telefonunuzu giriniz");
      

      setTimeout( ()=> {
        alert("Bilgileriniz gönderildi");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: ""
        })
      }, 1000);




    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    
    
    

  }

  return (
    <Container className="mt-5">
      <Form method="post" onSubmit={handleSubmit} noValidate >
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
        <Form.Group className="mb-3">
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            name="phone"
            type="text"
            placeholder="Telefonunuzu giriniz"
            value={formData.phone}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Button variant="info" type="submit">Kaydet</Button>
      </Form>




    </Container>
  );
};

export default Form5;

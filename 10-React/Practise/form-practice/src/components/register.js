import React,{useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    ssn: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    mobilePhoneNumber: "",
  };

  const validationSchema = Yup.object({
    ssn: Yup.string().required("Lütfen ssn giriniz."),
    firstName: Yup.string().required("Lütfen adınızı giriniz"),
    lastName: Yup.string().required("Lütfen soyadınızı giriniz"),
    email: Yup.string().email().required("Lütfen email giriniz."),
    password: Yup.string()
      .required("Lütfen password giriniz.")
      .min(8, "En az 8 karakter olmalı")
      .matches(/[a-z]+/, "En az bir küçük harf olmalı.")
      .matches(/[A-Z]+/, "En az bir büyük harf olmalı.")
      .matches(/[@$!%*#?&.]+/, "En az bir özell karakter olmalı.")
      .matches(/\d+/, "En az bir rakam olmalı."),
    address: Yup.string().required("Lütfen address giriniz."),
    mobilePhoneNumber: Yup.string().required(
      "Lütfen cep telefonu numaranızı giriniz."
    ),
  });

  const onSubmit = (values) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Kayıt Başarılı");
      navigate("/");
    }, 3000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <Card style={{ width: "24rem", margin: "2rem auto" }}>
      <Card.Body>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>SSN</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("ssn")}
              isInvalid={formik.touched.ssn && formik.errors.ssn}
              isValid={formik.touched.ssn && !formik.errors.ssn}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.ssn}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("firstName")}
              isInvalid={formik.touched.firstName && formik.errors.firstName}
              isValid={formik.touched.firstName && !formik.errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("lastName")}
              isInvalid={formik.touched.lastName && formik.errors.lastName}
              isValid={formik.touched.lastName && !formik.errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              {...formik.getFieldProps("email")}
              isInvalid={formik.touched.email && formik.errors.email}
              isValid={formik.touched.email && !formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...formik.getFieldProps("password")}
              isInvalid={formik.touched.password && formik.errors.password}
              isValid={formik.touched.password && !formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="address"
              {...formik.getFieldProps("address")}
              isInvalid={formik.touched.address && formik.errors.address}
              isValid={formik.touched.address && !formik.errors.address}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.address}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Phone Number</Form.Label>
            <Form.Control
              type="address"
              {...formik.getFieldProps("mobilePhoneNumber")}
              isInvalid={
                formik.touched.mobilePhoneNumber &&
                formik.errors.mobilePhoneNumber
              }
              isValid={
                formik.touched.mobilePhoneNumber &&
                !formik.errors.mobilePhoneNumber
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.mobilePhoneNumber}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" disabled={!formik.dirty || !formik.isValid || loading}> {/* {!(formik.dirty && formik.isValid) || loading} */}
            {loading && <Spinner animation="border" />} Register
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Register;

import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import { Switch, Route, Routes } from "react-router-dom";

function Account() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Register />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Login />
        </Col>
      </Row>
    </Container>
  );
}

export default Account;

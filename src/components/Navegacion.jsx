import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faCake } from "@fortawesome/free-solid-svg-icons";

function Navegacion() {
  return (
    <Navbar className="bg-red justify-content-between">
      <Form>
        <Link to="/" className="text-white ms-1 text-decoration-none">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link to="/contacto" className="text-white ms-1 text-decoration-none">
          <FontAwesomeIcon icon={faEnvelope} /> Contacto
        </Link>
      </Form>
      <Form>
        <Row>
          <Col xs="auto" className="text-white">
            <FontAwesomeIcon icon={faCake} />
            Happy Cake
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default Navegacion;

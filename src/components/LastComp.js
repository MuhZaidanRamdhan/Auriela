import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function LastComp() {
  return (
    <div
      className="last d-flex align-items-center min-vh-100"
      id="last"
    >
      <Container>
        <Row className="mb-5">
          <Col className="">
            <h1 className="services-title text-center">
              / At least we met. /
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="services-title text-center">
              / You are a moment. which I remember. /
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LastComp;

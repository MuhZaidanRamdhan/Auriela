import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function HeroComp() {
  return (
    <div className="hero min-vh-100 w-100 d-flex align-items-center" id="hero">
      <Container>
        <Row>
          <Col className="text-center text-white">
            <h1 className="text-center fs-1 animate__animated animate__fadeInUp animate__delay-4s">
              Auriela Alfredo
            </h1>
            <p className="spesial text-center text-white-50 animate__animated animate__fadeInUp animate__delay-5s">
              the special person born in march.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroComp;

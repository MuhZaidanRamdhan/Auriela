import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

function FaqComp() {
  return (
    <div className="faq min-vh-100 " id="faq">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold">Funny Riddles</h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-3">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Ayam ayam apa yang kecil?</Accordion.Header>
                <Accordion.Body>Ayam suwir xixixixi</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Olahraga yang tidak bisa dilakukan pada malam hari?
                </Accordion.Header>
                <Accordion.Body>Lari pagi xixixixi</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Kenapa air mata warnanya bening?
                </Accordion.Header>
                <Accordion.Body>
                  Kalau ijo namanya air matcha xixixi
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                Gajah apa yang paling baik hati
                </Accordion.Header>
                <Accordion.Body>
                 Gajahat
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Bundaran HI kalau diputerin dua kali jadi apa?
                </Accordion.Header>
                <Accordion.Body>HIHI</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Kenapa ikan enggak pernah tidur?</Accordion.Header>
                <Accordion.Body>
                karena kasurnya basah terus.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FaqComp;

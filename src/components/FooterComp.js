import { Col, Container, Row } from "react-bootstrap";

function FooterComp() {
  return (
    <div className="footer pb-3 pt-4 p-3">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center flex-column py-3">
            <a href="http://wa.me/6285719404786" className="text-center">
            <button className="feedback">Feedback</button>
            </a>
            <h6 className="create text-center text-white p-3">
              Create with❤️and🍵from creator.
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterComp;

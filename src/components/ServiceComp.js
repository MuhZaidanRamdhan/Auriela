import React, { useEffect, useRef } from "react"; // Menambahkan useRef dan useEffect
import { Col, Container, Row } from "react-bootstrap";
import audio from "../assets/audio/soundtrack.mp3";
// import bubib from "../assets/gallery/bubib.png";

function ServiceComp() {
  return (
    <div
      className=" min-vh-100 d-flex align-items-center"
      style={{ paddingTop: "180px" }}
      id="service"
    >
      <Container>
        <Row className="mb-5">
          <Col className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="services-title text-center fw-bold">
              This & my favorite yapper🗣️
            </h1>
            <p className="text-center">Please play this music while you read</p>
            <audio controls>
              <source src={audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <div
              className="birthday-message "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-left fs-5 italic">
                To my favorite yapper, <br />
                Auriela.
                <br />
              </p>
              <p className="mt-3 fs-5 text-left">
                Happy Birthday! May today be a{" "}
                <span className="text-red-600">beautiful</span> day and this
                year be full of good things. May what you hope for come true,
                prayers for this year may it be made easy. wishing you a
                fantastic year ahead filled with new adventures,{" "}
                <span className="text-red-600">laughter</span> and endless{" "}
                <span className="text-red-600">happines</span> . keep growing,
                do it or not at all, I'm here always{" "}
                <span className="text-red-600">supporting</span> whatever you do
                of course from behind. keep being your amazing self.
                <br />
                <br /> I hope you are fine there. if you need{" "}
                <span className="text-red-600">someone</span> to talk to, joke
                with and other things. Just chat me if you want. no matter how{" "}
                <span className="text-red-600">busy</span> I am I will
                definitely make time, because in my opinion busy doesn't exist,
                it all depends on{" "}
                <span className="text-red-600">priorities</span>. I also can't
                force you to chat me all the time but if you chat I will
                definitely reply, just tell me what you want to say to me
                personally.
                <br />
                <br /> Thank you for being my friend, thank you also for being a
                part of your life and I am lucky to know you. I hope{" "}
                <span className="text-red-600">good things</span> come to you. I
                will always be there for you, as a good friend. This world is
                full of coincidences, and one of the coincidences I am most
                grateful for is meeting you. in that impossibility, you are
                deserve better, so I{" "}
                <span className="text-red-600">became better</span>. and I wish
                I was your{" "}
                <span className="text-red-600">favorite listener</span>. a place
                where you express your{" "}
                <span className="text-red-600">feelings</span> without
                hesitation, a place where your voice is always heard,{" "}
                <span className="text-red-600">appreciated</span> and
                understood.
              </p>
              <p className="text-left fs-5 italic">
                From, <br /> someone.
              </p>
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col className="d-flex justify-content-center align-items-center"> 
            <img src={bubib} alt="" className="bubib"/>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default ServiceComp;

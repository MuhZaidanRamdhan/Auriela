import React, { useEffect, useRef } from "react"; // Menambahkan useRef dan useEffect
import { Col, Container, Row } from "react-bootstrap";
import audio from "../assets/audio/soundtrack.mp3";

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
            <p className="text-center">I type this message consciously</p>
            <audio controls>
              <source src={audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <div className="birthday-message">
              <p className="text-left fs-5 italic">
                To my favorite yapper, <br />
                Auriela.
                <br />
              </p>
              <p className="mt-3 fs-5 text-left">
                Happy Birthday! May today be a beautiful day and this year be
                full of good things. May what you hope for come true, prayers
                for this year may it be made easy. wishing you a fantastic year
                ahead filled with new adventures, laughter and endless happines.
                keep growing, do it or not at all, I'm here always supporting
                whatever you do of course from behind. keep being your amazing
                self.
                <br />
                <br /> I hope you are fine there. if you need someone to talk
                to, joke with and other things. Just chat me if you want. no
                matter how busy I am I will definitely make time, because in my
                opinion busy doesn't exist, it all depends on priorities. I also
                can't force you to chat me all the time but if you chat I will
                definitely reply, just tell me what you want to say to me
                personally.
                <br />
                <br /> Thank you for being my friend, thank you also for being a
                part of your life and I am lucky to know you. I hope good things
                come to you. I will always be there for you, as a good friend.
                This world is full of coincidences, and one of the coincidences
                I am most grateful for is meeting you. you are deserve better,
                so I become better. I wish I was your favorite listener.
              </p>
              <p className="text-left fs-5 italic">
                From, <br /> someone.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceComp;

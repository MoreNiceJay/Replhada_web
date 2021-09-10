import React from "react";
import { Row, Container } from "react-bootstrap";

function HeroBanner() {
  return (
    <section id="home">
      <Container>
        <Row>
          <div className="home-text">
            <div className="section-text__subtitle">
              리플하다 - 친환경의 시작
            </div>
            <div className="section-text__title-big">친환경의 시작</div>
            <div className="section-text__body">
              뭐라고 해도해도해도해도 뭐라고 해도해도해도해도 뭐라고
              해도해도해도해도 뭐라고 해도해도해도해도
            </div>
            {/* <a href="#download" className="download-btn">
              Download App
            </a> */}
          </div>

          <div className="section-image">
            <img src="./images/hero-right.png" alt="App Preview" />
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default HeroBanner;

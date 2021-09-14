import React from "react";
import { Row, Container } from "react-bootstrap";

function HeroBanner() {
  return (
    <section id="home">
      <Container>
        <Row>
          <div className="home-text">
            <div className="section-text__subtitle">
              <span >리플하다 - 배달용기 순환 플랫폼</span>
            </div>
            <div className="section-text__title-big">내 손안의 에코메이트</div>
            <div className="section-text__body">
              파트너들과 친환경 에코생태계를 만들어나가고 있습니다.지금 리플하다의 파트너가 되어 아름다운 환경을 지키는 일에 동참해주세요.
            </div>
            <a href="#download" className="download-btn__img">
              <img src="./images/app_btn1.webp" alt="app store" />
            </a>
            <a href="#download" className="download-btn__img">
              <img src="./images/app_btn2.webp" alt="google play store" />
            </a>
          </div>

          <div className="section-image">
            <img src="./images/icon.jpg" alt="App Preview" style={{ height: "250px", borderRadius: "20px" }} />
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default HeroBanner;

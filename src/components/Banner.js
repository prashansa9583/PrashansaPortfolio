import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import backgroundVideo from '../assets/bgvd.mp4'; // Adjust the path to your video file
import myImg from '../assets/img/portfolioimg2.png';

export const Banner = () => {
  const [text, setText] = useState('');
  const fullText = "Prashansa Erande";
  const typingSpeed = 150;

  useEffect(() => {
    let index = 0;
    const type = () => {
      setText(fullText.substring(0, index + 1));
      index++;
      if (index < fullText.length) {
        setTimeout(type, typingSpeed);
      }
    };

    type();
  }, []);
  
  return (
    <section className="banner" id="home">
      <video autoPlay loop muted preload="auto">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <span className="tagline">Hello,World!</span>
              <h1>{`I'm `}<span>{text}</span></h1>
              <p>Computer engineering student with a passion for technology and a flair for creativity. Let's connect and explore the world of possibilities together!</p>
              <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="image-col">
            <div className="image-container">
              <img src={myImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Banner; 

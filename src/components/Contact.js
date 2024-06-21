import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3hf0y8p', 'template_9y6fxjx', e.target, 'G0ENHJ3P-ZWDTqO1r')
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        setShowModal(true); 
        e.target.reset();
      }, (error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={1} md={3}>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="firstName" placeholder="First Name" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="lastName" placeholder="Last Name" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" placeholder="Email Address" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" placeholder="Phone No." required />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" placeholder="Message" required></textarea>
                        <button type="submit"><span>Send</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
        <Modal.Title className="modal-title" style={{ color: '#1F6E8C', fontSize: '26px', fontWeight: 'bold' }}>Message Sent</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body className="modal-body">Your message has been successfully sent!</Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Contact;

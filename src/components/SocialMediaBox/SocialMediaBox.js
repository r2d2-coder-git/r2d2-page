import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importa los iconos de las redes sociales
import './SocialMediaBox.css'; // Importa el archivo CSS para los estilos personalizados

const SocialMediaBox = () => {
  return (
    <Container className="social-media-box" fluid>
      <Row className="justify-content-center">
        <Col xs="auto" className="social-icon">
          <div className="icon-container">
            <FaFacebook size={64} />
          </div>
        </Col>
        <Col xs="auto" className="social-icon">
          <div className="icon-container">
            <FaTwitter size={64} />
          </div>
        </Col>
        <Col xs="auto" className="social-icon">
          <div className="icon-container">
            <FaInstagram size={64} />
          </div>
        </Col>
        <Col xs="auto" className="social-icon">
          <div className="icon-container">
            <FaLinkedin size={64} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMediaBox;
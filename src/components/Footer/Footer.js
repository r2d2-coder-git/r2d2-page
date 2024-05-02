import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/shared_styles.css';

const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Row>
        <Col className="satoshi-medium text-center">
          <p><em>Made by <b>r2d2coder</b> with love</em></p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

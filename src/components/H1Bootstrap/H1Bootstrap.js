import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const H1Bootstrap = ({ text }) => {
  return (
    <Container>
      <Row className="pt-5 justify-content-center">
        <Col xs="12" className="mb-5 text-center">
          <h1>{text}</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default H1Bootstrap;

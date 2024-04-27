import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CollabLinks.css'; // Importa tu archivo CSS donde defines los estilos

const CollabLinks = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="enlace-con-borde">
            <p>Charla sobre React</p>
            <Button variant="primary">Ver más</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="enlace-con-borde">
            <p>Charla sobre JavaScript</p>
            <Button variant="primary">Ver más</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="enlace-con-borde">
            <p>Charla sobre HTML y CSS</p>
            <Button variant="primary">Ver más</Button>
          </div>
        </Col>
      </Row>
      {/* Agrega más enlaces según sea necesario */}
    </Container>
  );
}

export default CollabLinks;

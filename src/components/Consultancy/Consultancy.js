import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Consultancy.css'
import '../../css/shared_styles.css'

const Consultancy = () => {
  return (
    <Container id="consultorias" className="satoshi-medium main-container">
      <Row>
        <Col>
        <h2 className='text-center' style={{ marginBottom: '30px' }}>Consultorías</h2>
          <p>¿Quieres conseguir un trabajo en el mundo de la programación?</p>
          <Button className='button-generic' variant="primary" href="#"><em><b>Próximamente</b></em></Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Consultancy;

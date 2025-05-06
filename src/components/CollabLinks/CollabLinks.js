import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CollabLinks.css';
import '../../css/shared_styles.css';
import keysfan from '../../images/keysfan.png'

const CollabLinks = () => {
  const links = [
    { image: keysfan, title: 'KEYS FAN (52% DESCUENTO CÓDIGO:R2D52)', url: 'https://es.keysfan.com/windows-11-professional-key.html?ksf=ar2sr' }
  ];

  return (
    <Container className='satoshi-medium main-container'>
      <h2 className='text-center' style={{ marginBottom: '30px' }}>Colaboraciones</h2>
      {links.map((link, index) => (
        <Row key={index} style={{marginBottom:'20px'}}>
          <Col xs={4} className="text-center" style={{marginTop:'20px'}}>
            <img src={link.image} alt={link.title} className="small-round-image" />
          </Col>
          <Col xs={4} className="text-center" style={{marginTop:'10px'}}>
              <p>{link.title}</p>
          </Col>
          <Col xs={4} className="text-center ">
            <Button className='button-generic' variant="primary" href={link.url} target="_blank" style={{marginTop:'10px'}}>Ver más</Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default CollabLinks;

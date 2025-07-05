import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CollabLinks.css';
import '../../css/shared_styles.css';
import temu from '../../images/temu.png'
import hbada from '../../images/hbada.svg'

const CollabLinks = () => {
  const links = [
    { image: hbada, title: 'SILLA HBADA PÁGINA OFICIAL (Código 5% DTO: R2D2)', url: 'https://bit.ly/44nyzYe' },
    { image: hbada, title: 'SILLA HBADA AMAZON (Código 5% DTO: R2DECODE)', url: 'https://amzn.to/3HsITp9' },
    { image: temu, title: 'TEMU TECLADO Y MONITOR (Código DTO: dwf7748)', url: 'https://app.temu.com/k/esmzh8i3hj8' },
  { image: temu, title: 'TEMU PRODUCTOS A 0$ (Código Mágico: dzd2585)', url: 'https://app.temu.com/k/efwpp1p9r71' }  ];

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

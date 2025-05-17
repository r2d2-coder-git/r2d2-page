import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CollabLinks.css';
import '../../css/shared_styles.css';
import temu from '../../images/temu.png'

const CollabLinks = () => {
  const links = [
    { image: temu, title: 'TECLADO TEMU (Código DTO: dwf7748)', url: 'https://www.temu.com/es/teclado-mecanico-ajazz-ak820pro-75-con-pantalla-tft-intercambiable-en-caliente-triple--inalambrico-2-4g-cableado-retroiluminacion-rgb-led-compatible-para-juegos-y--para-windows--bateria-de-4000mah-g-601099710772940.html' },
    { image: temu, title: 'PANTALLA PORTÁTIL TEMU (Código DTO: dwf7748)', url: 'https://www.temu.com/es/monitor-portatil-con-pantalla---de-15-6-fhd-1080p--lcd-pantalla-ips-de-1920x1080---de-3-ms-75-srgb-mate--usb-compatible-con-computadora-portatil-ps5-4-pc--g-601099733728761.html' }
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

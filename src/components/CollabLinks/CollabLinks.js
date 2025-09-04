import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CollabLinks.css';
import '../../css/shared_styles.css';
import cloudways from '../../images/cloudways.png'
import emergent from '../../images/emergent.png'

const CollabLinks = () => {
  const links = [
    { image: emergent, title: 'EMERGENT: AGENTE DE AI', url: 'https://app.emergent.sh/' } ,
    { image: cloudways, title: 'CLOUDWAYS: SERVIDORES GESTIONADOS (Código: R2D2CODE)', url: 'https://www.cloudways.com/es/?id=1972954' } 
   ];

  return (
    <Container id='colaboraciones' className='satoshi-medium main-container'>
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

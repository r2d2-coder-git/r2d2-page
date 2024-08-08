import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CollabLinks.css';
import '../../css/shared_styles.css';
import nuclioImage from '../../images/nuclio_logo.svg'
import inmigoImage from '../../images/inmigo.svg'
import elevaImage from '../../images/eleva.svg'

const CollabLinks = () => {
  const links = [
    { image: nuclioImage, title: 'EVENTO ANALISTA DE DATOS 20 AGOSTO', url: 'https://www.crowdcast.io/c/data-analyst-arturo' },
    { image: inmigoImage, title: 'APRENDE INGLÉS DESDE 1.99$ POR CLASE', url: ' https://dev.immigo.io/?via=r2d2' },
    { image: elevaImage, title: 'MI ESCRITORIO ELEVA 3.0', url: 'https://elevadesk.com/products/escritorio-elevable-eleva-3-0' },
    { image: nuclioImage, title: 'MASTER DE DATA SCIENCE', url: 'https://share.hsforms.com/196JAx4YVSnKBjKy3aFfHcQ2zdpt' }
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

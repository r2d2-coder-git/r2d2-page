import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CollabLinks.css';
import '../../css/shared_styles.css';
import nuclioImage from '../../images/nuclio_logo.svg'

const CollabLinks = () => {
  const links = [
    { image: nuclioImage, title: 'Charla sobre roles Data Science 14 Mayo', url: 'https://nuclio.school/event/explorando-los-diferentes-roles-de-un-cientifico-de-datos/' },
    { image: nuclioImage, title: 'Charla sobre flujo de datos 15 mayo', url: 'https://www.crowdcast.io/c/-de-bits-a-insights' }
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

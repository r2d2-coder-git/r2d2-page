import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CollabLinks.css';
import '../../css/shared_styles.css';
import nuclioImage from '../../images/nuclio_logo.svg'
import IronhackImage from '../../images/ironhack_logo.svg'
import BinaryStudioImage from '../../images/binary_studio_logo.svg'

const CollabLinks = () => {
  const links = [
    { image: nuclioImage, title: 'Charla sobre roles Data Science 14 Mayo', url: 'https://nuclio.school/event/explorando-los-diferentes-roles-de-un-cientifico-de-datos/' },
    { image: nuclioImage, title: 'Charla sobre flujo de datos 15 mayo', url: 'https://www.crowdcast.io/c/-de-bits-a-insights' },
    { image: IronhackImage, title: 'Congreso WeData 18 Mayo', url: 'https://www.eventbrite.com/e/entradas-mad-wedata-el-congreso-de-data-analytics-mas-top-de-madrid-862801531607?utm_source=influencer&utm_medium=social&utm_campaign=24-05_LOC_eur_SP_apps_r2d2.coder_wedata_&utm_content=influencers' },
    { image: BinaryStudioImage, title: 'Academia GRATIS Desarrollo Web', url: 'https://academy.binary-studio.com/?utm_source=Instagram&utm_medium=influencer&utm_campaign=Arturo_lorenzo' }
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

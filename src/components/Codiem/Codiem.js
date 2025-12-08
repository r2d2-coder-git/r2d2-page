import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Codiem.css';
import '../../css/shared_styles.css';
import codiem from '../../images/codiem.jpeg'

const Codiem = () => {
  const links = [
    { image: codiem, title: 'CÓDIGO DESCUENTO(20%): 20R2D2', url: 'https://www.etsy.com/shop/CodiemStudio?ref=shop_sugg_market' } ,
   ];

  return (
    <Container id='codiem' className='satoshi-medium main-container'>
      <h2 className='text-center' style={{ marginBottom: '30px' }}>El Merch que sólo tú entiendes</h2>
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

export default Codiem;

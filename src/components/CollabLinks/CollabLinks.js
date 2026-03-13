import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CollabLinks.css';
import '../../css/shared_styles.css';
import blink from '../../images/blink.png'
import atoms from '../../images/atoms.png'
import skywork from '../../images/skywork.png'
import emergent from '../../images/emergent.png'

const CollabLinks = () => {
  const links = [
     { image: blink, title: 'BLINK', url: 'https://blink.new/' } ,
    { image: atoms, title: 'ATOMS', url: 'https://atoms.dev/?utm_source=taidong&utm_medium=r2d2.coder&utm_content=instagram&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGndZzBSxfskNIZSn7MMQjiNUSZFd0If-JImUWVsD8CrF65gyoLSAFhy6I7AVs_aem_8Y3RNN6lx92-NyC3OkS-kg' } ,
    { image: skywork, title: 'SKYWORK', url: 'https://skywork.ai/?referrer=r2d2coder&shortlink_id=2032034977147248640&utm_source=ins' } ,
    { image: emergent, title: 'EMERGENT', url: 'https://app.emergent.sh/?via=r2d2tech' } ,
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

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CollabLinks.css';
import '../../css/shared_styles.css';
import emergent from '../../images/emergent.png'
import readdy from '../../images/readdy.png'
import verdent from '../../images/verdent.svg'

const CollabLinks = () => {
  const links = [
    { image: readdy, title: 'READDY AI', url: 'https://bit.ly/Readdy01_ArturoLorenzo' } ,
    { image: verdent, title: 'VERDENT AI', url: 'https://www.verdent.ai/es?id=700036&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnpFLTqV45CgtCNuscIjY9XiDqesDL0KwPgI57sZzPfzyjZt05Ylmf_ictdRY_aem_okP-LKZLhTEoiRbwDOMITw' } ,
    { image: emergent, title: 'EMERGENT: AGENTE DE AI', url: 'https://app.emergent.sh/?via=r2d2tech' } ,
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

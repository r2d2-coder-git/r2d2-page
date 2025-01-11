import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './EduAdvice.css';
import '../../css/shared_styles.css';
import eduAdviceImage from '../../images/eduadvice.svg';

const EduAdvice = () => {
  const links = [
    { image: eduAdviceImage, title: 'CURSOS Y MASTERS FULL STACK DEVELOPER', url: 'https://eadv.io/13292/r2d2coder' },
    { image: eduAdviceImage, title: 'CURSOS Y MASTERS DATA SCIENCE', url: 'https://eadv.io/26688/r2d2coder' },
    { image: eduAdviceImage, title: 'CURSOS Y MASTERS BIG DATA', url: 'https://eadv.io/11935/r2d2coder' },
    { image: eduAdviceImage, title: 'GRADO SUPERIOR DAW', url: 'https://eadv.io/1111/r2d2coder' }
  ];

  return (
    <Container className='satoshi-medium main-container'>
      <h2 className='text-center' style={{ marginBottom: '30px' }}>¿Dónde me aconsejas estudiar?</h2>
      <Row>
        {links.map((link, index) => (
          <Col key={index} xs={12} md={6} className="text-center" style={{ marginBottom: '20px' }}>
            
            <p><b>{link.title}</b></p>
            <Button className='button-generic' variant="primary" href={link.url} target="_blank">Ver más</Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default EduAdvice;
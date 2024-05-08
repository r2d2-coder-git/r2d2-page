import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Courses.css'; 
import '../../css/shared_styles.css'
import pythonImage from '../../images/python.svg'
import reportImage from '../../images/report.svg'
import awsImage from '../../images/aws.svg'

const Courses = () => {
  const courses = [
    { title: 'Python desde cero', instructor: 'Arturo Lorenzo', imageUrl: pythonImage, url: 'https://www.udemy.com/course/python-desde-cero-hasta-nivel-experto/?referralCode=8F7A5E56D33ACC40F277', available: true },
    { title: 'AWS para análisis big data', instructor: 'Arturo Lorenzo', imageUrl: awsImage, url: 'https://www.nucliolearning.com/tecnologia/analisisdedatosparabigdataenaws', available: true },
    { title: 'Python para análisis de datos', instructor: 'Arturo Lorenzo', imageUrl: reportImage, url: 'url2', available: false }
  ];

  return (
    <Container className="satoshi-medium main-container" fluid>
      <h2 className='text-center' style={{ marginBottom: '30px' }}>Aprende con mis cursos</h2>
      <Row className='center-row'>
        {courses.map((course, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className='text-center'>
            <div className="course-card">
              <img src={course.imageUrl} alt={course.title} className="course-image" />
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
              {course.available ? (
                <Button className = 'button-generic' variant="primary" href={course.url} target="_blank" style={{ marginTop: '10px', marginBottom: '10px' }}>Ver más</Button>
              ) : (
                <p style={{ marginTop: '10px', marginBottom: '10px' }}><b><em>Próximamente</em></b></p>
              )}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;

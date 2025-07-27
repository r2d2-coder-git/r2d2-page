import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Courses.css';
import '../../css/shared_styles.css'
import pythonImage from '../../images/python.svg'
import reportImage from '../../images/report.svg'
import awsImage from '../../images/aws.svg'


const renderNewLabel = (course) => {
  if (course.isNew) {
    return (
      <p className='text-danger' style={{ marginTop: '10px', marginBottom: '10px' }}>
        <b><em>¡Recién lanzado!</em></b>
      </p>
    );
  }
  return null; // No renderiza nada si no es nuevo
}

const Courses = () => {
  const [udemyCourses, setUdemyCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const localCourses = [
    { title: 'AWS para Análisis Big Data', instructor: 'Arturo Lorenzo', imageUrl: awsImage, url: 'https://www.udemy.com/course/aws-para-analistas-de-datos-total-en-7-dias/?couponCode=181E68CFF7F2BBA7BD8B', available: true, isNew: true },
    { title: 'Análisis de datos con Python', instructor: 'Arturo Lorenzo', imageUrl: reportImage, url: 'https://www.udemy.com/course/analisis-de-datos-con-python-total-en-7-dias/?couponCode=F64E1628FDFA3345B6D8', available: true, isNew: false },
    { title: 'Python desde cero', instructor: 'Arturo Lorenzo', imageUrl: pythonImage, url: 'https://www.udemy.com/course/python-desde-cero-hasta-nivel-experto/?couponCode=02BF27BEBD34E64AEFB2', available: true, isNew: false }
  ];

  useEffect(() => {
    fetch('http://localhost:4000/api/udemy-ratings')
      .then(res => res.json())
      .then(data => {
        setUdemyCourses(data);
        setLoading(false);
      })
      .catch(err => {
        setError('No se pudieron cargar los datos de Udemy');
        setLoading(false);
      });
  }, []);

  // Relacionar localCourses con udemyCourses por título
  const getRatingForCourse = (title) => {
    console.log(udemyCourses)
    const found = udemyCourses.find(c => c.title.toLowerCase().includes(title.split(' ')[0].toLowerCase()));
    return found ? found.rating : null;
  };

  return (
    <Container id="cursos" className="satoshi-medium main-container" fluid>
      <h2 className='text-center' style={{ marginBottom: '10px' }}>Aprende con mis cursos</h2>
      <p className="fs-4 fw-bold text-danger">
        <b><em>¡Nuevo curso disponible!🔥</em></b>
      </p>
      {loading && <p>Cargando datos de Udemy...</p>}
      {error && <p className="text-danger">{error}</p>}
      <Row className='center-row'>
        {localCourses.map((course, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className='text-center'>
            <div className="course-card">
              <img src={course.imageUrl} alt={course.title} className="course-image" />
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
              <p><b>Rating Udemy: {getRatingForCourse(course.title) || 'N/A'}</b></p>
              {course.available ? (
                <Button className='button-generic' variant="primary" href={course.url} target="_blank" style={{ marginTop: '10px', marginBottom: '10px' }}>Ver más</Button>
              ) : (
                <p style={{ marginTop: '10px', marginBottom: '10px' }}><b><em>Próximamente</em></b></p>
              )}
              {renderNewLabel(course)}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './UdemyCourses.css'; // Importa el archivo CSS para los estilos personalizados

const UdemyCourses = () => {
  // Aquí podrías tener un array de objetos con la información de tus cursos de Udemy
  const courses = [
    { title: 'Curso de Python', instructor: 'John Doe', imageUrl: 'url_de_la_imagen' },
    { title: 'Curso de JavaScript', instructor: 'Jane Smith', imageUrl: 'url_de_la_imagen' },
    // Agrega más cursos según necesites
  ];

  return (
    <Container className="udemy-courses" fluid>
      <h2 className='text-center'>Mis cursos de Udemy</h2>
      <Row className='center-row'>
        {courses.map((course, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className='text-center'>
            <div className="course-card">
              <img src={course.imageUrl} alt={course.title} />
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UdemyCourses;

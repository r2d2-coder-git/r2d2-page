import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Background.css';
import '../../css/shared_styles.css'

const Background = () => {
  const experiences = [
    {
      title: "Data Architect",
      company: "Grupo IskayPet (Tiendanimal, Kiwoko, Kivet, Clinicanimal)",
      period: "feb. 2023 - actualidad",
      duration: "2 años 6 meses",
      location: "Málaga, Andalucía, España · Híbrido",
      description: "Implemento y mantengo la arquitectura de datos de forma escalable y segura usando tecnologías AWS como EMR, Step Functions, Lambda Functions, Glue Data Catalog y Pyspark para procesamiento de big data y analytics. Trabajo con herramientas como Terraform para automatizar la gestión de infraestructura."
    },
    {
      title: "Big Data Engineer",
      company: "MDW",
      period: "nov. 2021 - feb. 2023",
      duration: "1 año 4 meses",
      location: "Remoto",
      description: "Implementé y mantuve procesos ETL con Azure Data Factory, desarrollo de tests de consistencia con Pyspark en Databricks, y desarrollo de infraestructura como código con Terraform y automatización con CI/CD pipelines en Azure DevOps."
    },
    {
      title: "Big Data Engineer",
      company: "Capgemini",
      period: "abr. 2021 - nov. 2021",
      duration: "8 meses",
      location: "Murcia, Región de Murcia, España",
      description: "Realicé procesos ETL de empresa internacional usando tecnología Talend. También realicé consultas complejas y análisis de datalake en Azure Synapse."
    }
  ];

  const education = {
    institution: "Universidad de Murcia",
    degree: "Ingeniería Informática",
    period: "2017 - 2021",
    grade: "Nota: 7.75"
  };

  const skills = [
    "AWS (EMR, Step Functions, Lambda, Glue)",
    "Azure (Data Factory, Synapse, Databricks)",
    "Terraform & Infrastructure as Code",
    "Python & PySpark",
    "ETL & Data Processing",
    "CI/CD & DevOps"
  ];

  return (
    <Container className="satoshi-medium main-container" fluid>
      <h2 className='text-center satoshi-bold' style={{ marginBottom: '30px' }}>Mi Background Profesional</h2>
      
      {/* Experiencia Profesional */}
      <Row className="mb-4">
        <Col>
          <h3 className="satoshi-bold section-title">💼 Experiencia Profesional</h3>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <h4 className="satoshi-bold">{exp.title}</h4>
                  <span className="company-name">{exp.company}</span>
                </div>
                <div className="experience-meta">
                  <span className="period">{exp.period} · {exp.duration}</span>
                  <span className="location">{exp.location}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {/* Educación */}
      <Row className="mb-4">
        <Col>
          <h3 className="satoshi-bold section-title">🎓 Educación</h3>
          <div className="education-item">
            <h4 className="satoshi-bold">{education.degree}</h4>
            <span className="institution">{education.institution}</span>
            <div className="education-meta">
              <span className="period">{education.period}</span>
              <span className="grade">{education.grade}</span>
            </div>
          </div>
        </Col>
      </Row>

      {/* Tecnologías y Habilidades */}
      <Row>
        <Col>
          <h3 className="satoshi-bold section-title">🚀 Tecnologías y Habilidades</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Background;
import './Introduction.css'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import personalImage from '../../images/personal-image.png'

function Introduction({title, description}) {
    return (
        <div className="app">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col sm={6}>
              <div className="image-container">
                <img src={personalImage} alt="Placeholder" />
              </div>
            </Col>
            <Col sm={3} className="text-center">
              <div className="text-container">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

export default Introduction
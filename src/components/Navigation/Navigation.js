import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import personalImage from '../../images/personal-image.png';

function Navigation() {
  return (
    <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img
            src={personalImage}
            alt="Logo"
            width="60"
            height="60"
            style={{ marginRight: '30px' }}
          />Arturo Lorenzo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#">Consultorias</Nav.Link>
          <Nav.Link href="#id-professional-path">Trayectoria</Nav.Link>
          <Nav.Link href="#pricing">Redes sociales</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;



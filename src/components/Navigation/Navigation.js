import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import personalImage from '../../images/personal-image.png';
import './Navigation.css';

function Navigation() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar collapseOnSelect sticky='top' expand="lg" className="custom-navbar-bg" variant="light">
      <Container>
        <Navbar.Brand href="#home"><img
            src={personalImage}
            alt="Logo"
            width="60"
            height="60"
            style={{ marginRight: '30px' }}
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#cursos" onClick={e => handleNavClick(e, 'cursos')}>Cursos</Nav.Link>
            <Nav.Link href="#colaboraciones" onClick={e => handleNavClick(e, 'colaboraciones')}>Colaboraciones</Nav.Link>
            <Nav.Link href="#trayectoria" onClick={e => handleNavClick(e, 'trayectoria')}>Trayectoria</Nav.Link>
            <Nav.Link href="#redes-sociales" onClick={e => handleNavClick(e, 'redes-sociales')}>Redes sociales</Nav.Link>
           {/* <Nav.Link href="#consultorias" onClick={e => handleNavClick(e, 'consultorias')}>Consultorías</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;




import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaTwitch } from 'react-icons/fa';
import './SocialMedia.css';
import '../../css/shared_styles.css';

const SocialMedia = ({ socialsMedia }) => {
  return (
    <Container id="redes-sociales" className="main-container" fluid>
      <Row className="justify-content-center">
      <h2 className='text-center' style={{ marginBottom: '30px' }}>Redes sociales</h2>
        {socialsMedia.map((socialMedia, index) => (
          <Col key={index} xs="auto" className="social-icon">
            <div className="icon-container">
              {socialMedia.icono === 'facebook' && <a href={socialMedia.url} className="social-link"><FaFacebook className="social-icon-size" /></a>}
              {socialMedia.icono === 'twitch' && <a href={socialMedia.url} className="social-link"><FaTwitch className="social-icon-size" /></a>}
              {socialMedia.icono === 'twitter' && <a href={socialMedia.url} className="social-link"><FaTwitter className="social-icon-size" /></a>}
              {socialMedia.icono === 'instagram' && <a href={socialMedia.url} className="social-link"><FaInstagram className="social-icon-size" /></a>}
              {socialMedia.icono === 'linkedin' && <a href={socialMedia.url} className="social-link"><FaLinkedin className="social-icon-size" /></a>}
              {socialMedia.icono === 'github' && <a href={socialMedia.url} className="social-link"><FaGithub className="social-icon-size" /></a>}
              {socialMedia.icono === 'youtube' && <a href={socialMedia.url} className="social-link"><FaYoutube className="social-icon-size" /></a>}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SocialMedia;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import './SocialMedia.css';
import '../../css/shared_styles.css';

const SocialMedia = ({ socialsMedia }) => {
  return (
    <Container className="main-container" fluid>
      <Row className="justify-content-center">
        {socialsMedia.map((socialMedia, index) => (
          <Col key={index} xs="auto" className="social-icon">
            <div className="icon-container">
              {socialMedia.icono === 'facebook' && <a href={socialMedia.url} className="social-link"><FaFacebook size={64} /></a>}
              {socialMedia.icono === 'twitter' && <a href={socialMedia.url} className="social-link"><FaTwitter size={64} /></a>}
              {socialMedia.icono === 'instagram' && <a href={socialMedia.url} className="social-link"><FaInstagram size={64} /></a>}
              {socialMedia.icono === 'linkedin' && <a href={socialMedia.url} className="social-link"><FaLinkedin size={64} /></a>}
              {socialMedia.icono === 'github' && <a href={socialMedia.url} className="social-link"><FaGithub size={64} /></a>}
              {socialMedia.icono === 'youtube' && <a href={socialMedia.url} className="social-link"><FaYoutube size={64} /></a>}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SocialMedia;

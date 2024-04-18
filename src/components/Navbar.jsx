
 import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({ id }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        clearTimeout(timeout);
        setVisible(false);
        
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [lastScrollTop]);

  const scrollToSection = (id) => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ transition: 'opacity 0.5s', opacity: visible ? 1 : 0 }}>
      <Navbar id={id} collapseOnSelect expand="lg" className="bg-white d-flex justify-content-center align-items-center" fixed="top">
        <Container fluid>
          <Navbar.Brand class='d-flex align-items-center justify-content-center  'style={{ color: '#7f00ff' }}>
           <div className="d-flex justify-content-center align-items-center brand-name"><p style={{marginTop:"1.1rem"}}>Micheal</p></div>
          </Navbar.Brand>
          <Navbar.Toggle className="nav-bar toggler-icon " aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end " id="responsive-navbar-nav">
            <Nav className="me-auto nav-bar nav-group">
              <Nav.Link className='nav-items mx-2 p-2' onClick={() => scrollToSection('about')} style={{ color: '#7f00ff' }}>
                About
              </Nav.Link>
              <Nav.Link className='nav-items resume-nav mx-2 p-2' onClick={() => scrollToSection('resume')} style={{ color: '#7f00ff' }}>
                Resume
              </Nav.Link>
              <Nav.Link className='nav-items  mx-2 p-2' onClick={() => scrollToSection('skills')} style={{ color: '#7f00ff' }}>
                Skills
              </Nav.Link>
              <Nav.Link className='nav-items mx-2 p-2' onClick={() => scrollToSection('projects')} style={{ color: '#7f00ff' }}>
                Projects
              </Nav.Link>
                        
            
              <Nav.Link className='nav-items mx-2 p-2' onClick={() => scrollToSection('certificate')} style={{ color: '#7f00ff' }}>
                Certificates
              </Nav.Link>
              <Nav.Link className='nav-items mx-2 p-2' onClick={() => scrollToSection('contact')} style={{ color: '#7f00ff' }}>
                Contact
              </Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
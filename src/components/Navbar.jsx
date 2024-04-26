import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the close icon

const NavBar = ({ id }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [expanded, setExpanded] = useState(false); // State to track Navbar expansion status

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

  const toggleNavbar = () => {
    setExpanded(!expanded); // Toggle the Navbar expansion status
  };

  return (
    <div style={{ transition: 'opacity 0.5s', opacity: visible ? 1 : 0 }}>
      <Navbar id={id} collapseOnSelect expand="lg" className="bg-white d-flex justify-content-center align-items-center" fixed="top" expanded={expanded}>
        <Container fluid>
          <Navbar.Brand class='d-flex align-items-center justify-content-center  'style={{ color: '#7f00ff' }}>
            <div className="d-flex justify-content-center align-items-center brand-name"><p style={{marginTop:"1.1rem"}}>Micheal</p></div>
          </Navbar.Brand>
          {/* Conditionally render the hamburger or close icon based on Navbar expansion status */}
          {/* Hide the icon on large screens */}
          <FontAwesomeIcon
            icon={expanded ? faTimes : faBars} // Use faTimes when expanded, faBars otherwise
            style={{ color: '#7f00f0', fontSize: '1.6rem', cursor: 'pointer'}} // Initially hide the icon
            onClick={toggleNavbar}
            className="d-lg-none mr-2" // Hide the icon on large screens
          />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="me-auto nav-bar nav-group">
              <Nav.Link className='nav-items mx-2 p-2' onClick={() => scrollToSection('about')} style={{ color: '#7f00ff' }}>
                About
              </Nav.Link>
              <Nav.Link className='nav-items resume-nav mx-2 p-2' onClick={() => scrollToSection('resume')} style={{ color: '#7f00ff' }}>
                Resume
              </Nav.Link>
              <Nav.Link className='nav-items mx-2 p-2' onClick={() => scrollToSection('skills')} style={{ color: '#7f00ff' }}>
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

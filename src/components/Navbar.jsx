import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const TopNav = () => {
  return (
    
    <Navbar id="scrollspyTop" variant="dark" bg="black" expand="lg">
      <Container fluid>
        <Navbar.Brand href='/'><img src="/images/davidlogonav.png" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse className='justify-content-end' id="navbar-dark-example">
          <Nav  className=" justify-content-around">
          
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#scrollspyAboutMe">About</Nav.Link>
            <Nav.Link href="#scrollspyProjects">Projects</Nav.Link>
            <Nav.Link href="#scrollspyContact">Contact</Nav.Link>
          
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

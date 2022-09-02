import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'



const Header = () => {
    return (
        <div>
             <Navbar bg="dark"  expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="myTodos" >My ToDos List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="white-text">Home</Nav.Link>
            <Nav.Link href="#link" className="white-text">About</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
}

export default Header;

import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-primary color ">
    <Container fluid>
      <Navbar.Brand href="# ">Amazon.in </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1"><p>Delivering to Jaipur</p>location</Nav.Link>
          
         
        <Form className="d-flex my-4">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success my-2">Search</Button>
        </Form>
        <NavDropdown title="Hello, Sign in " id="navbarScrollingDropdown " className='my-4 mx-4'>
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">
          Something else here
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        
      </Nav.Link>
    </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavBar

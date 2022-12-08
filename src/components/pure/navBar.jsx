import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
    return (

        
    <Navbar sticky="top"  bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">NORMITEX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home Page</Nav.Link>
            <Nav.Link href="#action2">Ofertas</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Pantalones</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Camisas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Comentarios
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contacto 
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
            <Button variant="outline-danger">Salir</Button>{' '}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;

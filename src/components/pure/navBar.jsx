import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useUserToggleContext } from '../container/userLoginProvider';
import {useNavigate} from 'react-router-dom'



const NavBar = () => {

  const cambiaLogin=useUserToggleContext();

  const navigate=useNavigate()

  const handleClickOferta = (e) => {
    navigate("/oferta")
  }

  const handleClickHomePage = (e) =>{
    navigate("/homePag")
  }
  

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
            <Nav.Link href="#action1" onClick={handleClickHomePage}>Home Pag</Nav.Link>
            <Nav.Link href="#action2" onClick={handleClickOferta}>Ofertas</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Pantalones</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Camisas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" onClick={navigate("/create")}>Agregar Productos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='https://wa.me/3884852357'>
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
            <Button variant="outline-danger" href='/' onClick={cambiaLogin}>Salir</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar;

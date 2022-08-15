import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, NavLink, useLocation } from 'react-router-dom'
import HomeSvg from '../assets/svgs/home-svg'
const CustomNavbar = () => {


  return (
    <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to={'/'}>
          <Navbar.Brand>
            <div className="myDIV">
              <HomeSvg />
            </div>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className='mr-auto'>
          <LinkContainer to={'/'}>
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>  
          <LinkContainer to={'/cart'}>
            
            <Nav.Link><i className="fa-brands fa-apple"></i> Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to={'/about'}>
            <Nav.Link>About</Nav.Link>
            </LinkContainer>
           
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <LinkContainer to={'/1'}>
              <NavDropdown.Item >Action</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={'/2'}>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default CustomNavbar

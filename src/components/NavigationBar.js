import React, {useEffect, useState} from 'react'
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './navBar.css'
import PropTypes from 'prop-types';

const NavigationBar = ({onClick, onChange, value}) => {

  const handleChange = (event) => {
    const {value} = event.target;
    onChange(value);
  }

  return (
    <Navbar className = " pl-3 justify-content-center top-nav-bar navbar-dark lead" expand="lg">
        <Container fluid>
            
            <Navbar.Brand href="#" className='pl-2'>Forecast</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="m-auto my-lg-0 text-center"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                
                <Nav.Link href="#" className = "pl-5" ><i className="bi bi-arrow-clockwise"></i></Nav.Link>
                <Nav.Link href="#" ><i className="bi bi-star"></i></Nav.Link>
                <Nav.Link href="#" ><i className="bi bi-moon-fill"></i></Nav.Link>

                <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Account detailes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Show favorites</NavDropdown.Item>
                </NavDropdown>

            </Nav>
            <Form className="d-flex">
                <FormControl
                  type="text"
                  value = {value}
                  onChange = {handleChange}
                  placeholder="Search"
                  className="me-2 bg-secondary bg-gradient text-light searchBar"
                  aria-label="Search"
                />
                <Button 
                  onClick = {() => onClick()}
                  className = "btn btn-secondary">Search
                </Button>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

NavigationBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

NavigationBar.defaultProps = {
  value: ''
}

export default NavigationBar
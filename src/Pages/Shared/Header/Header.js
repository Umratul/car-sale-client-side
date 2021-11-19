import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user,logOut,dashboard } = useAuth();
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand href="#home" className="fw-bold text-info">CarRev</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
          <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
          {/* <Nav.Link as={HashLink} to="/purchase/:serviceId">My Orders</Nav.Link> */}
          
          {/* <Nav.Link as={HashLink} to="/manageOrders">Manage Orders</Nav.Link> */}
                    
          <Nav.Link as={HashLink} to="/addService">Admin</Nav.Link>
          {/* <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link> */}
                              
         
          {user?.email ?
                <div>
                  <Nav.Link as={HashLink} to="/dashboard">
                  <Button variant="light">Dashboard</Button></Nav.Link>

              <Button onClick={logOut} variant="light">Logout</Button> 
              </div>:
              
                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
      
            <Navbar.Text>
             Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
      
          </Container>
        </Navbar>
                  
              </>
    );
};

export default Header;
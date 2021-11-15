
import React from 'react';
import { Container, Nav, Navbar,  Offcanvas } from 'react-bootstrap';
import AddReview from '../AddReview/AddReview';


const Dashboard = () => {
    return (
        <Navbar bg="light" expand={false}>
  <Container fluid>
    
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="start" >
                    
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Dashboard
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-start flex-grow-1 pe-3">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/addService">Admin</Nav.Link>
          <Nav.Link href="/purchase/:serviceId">My Orders</Nav.Link>
          <Nav.Link href="/manageOrders">Manage Orders</Nav.Link>
          <Nav.Link href="/reviews">Review</Nav.Link>
        
        </Nav>
        
      </Offcanvas.Body>
        </Navbar.Offcanvas>
                {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
                

            </Container>
            <Container className="mx-auto">
            <AddReview></AddReview>
            </Container>
</Navbar>
    );
};

export default Dashboard;
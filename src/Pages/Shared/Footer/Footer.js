import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-light mt-5 mb-0">
            <h2 className="text-primary px-5 pt-2 pb-2">CarRev</h2>
            <p className=" ">Best Car Dealer</p>
        <hr />
        <Container>

        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <p>CarRev has financed over 4 million people across the country. Our exclusive In-House financing model allows us to provide flexible options for all.</p>
          </Col>
          
          <Col xs lg="6">
            <h4>Contact Us:</h4>
            <p>+092635791</p>
            <h4>Email Us:</h4>
            <p>carrev01@gmail.com</p>
          </Col>
        </Row>
        
            </Container>
             <hr />
         
         <p className="">Copyright © 2021 CarRev® All Rights Reserved</p>
      </div>


        // <div className="bg-light mt-5 mb-0">
        // <h2 className="px-5 pt-2 pb-2">Explore the <span className="text-primary">WORLD!</span> </h2>
        // <hr />
        // <h4>Contact Us:</h4>
        // <p>+09903459546</p>
        // <h4>Email Us:</h4>
        // <p>travelo@gmail.com</p>
        

        // <hr />
        // <p className="">© Copyright 2021 All Rights Reserved</p>
            
        // </div>
    );
};

export default Footer;
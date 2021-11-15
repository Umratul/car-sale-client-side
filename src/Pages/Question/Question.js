import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Question.css';

const Question = () => {
    return (
        <div className="q-container pt-5">
            <Container className=" ">

        <Row className="justify-content-center">
                    <Col xs md lg="4" className="justify-content-center">
                        <h2>About us</h2>
                        <p>CarRev has financed over 4 million people across the country. Our exclusive In-House financing model allows us to provide flexible options for all.</p>
                        <h2>Have any Query?</h2>
                        <button>Contact Us</button>
                        {/* <div className="d-flex flex-row m-3 p-5">
                        <h6 className="p-5">+092635791</h6>
                        <h6>Contact us</h6>
                        </div> */}
  </Col>
  
  <Col xs md lg="8" >
    <img className="h-75 " src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  alt=""/>
  </Col>
</Row>

    </Container>
    </div>  
    );
};

export default Question;
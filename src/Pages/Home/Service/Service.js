import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { _id ,name, price, img, description } = service;

    return (
        <div className="service ">
            <img src={img} alt="" />
            <h3 className="fst-italic text-primary">{name}</h3>
            <h5>Price: ${price}</h5>
            
            <p>{description}</p>
            
            <Link to={`/purchase/${_id}`}>
                <button className="btn btn-info fw-bold text-primaryn p-2 mb-3"> Purchase {name.toUpperCase()}</button>
            </Link>
            </div>
    );
};

export default Service;
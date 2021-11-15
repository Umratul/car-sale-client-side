import React from 'react';

import './Review.css';

const Review = ({review}) => {
    const { name,  img, description,rating } = review;

    return (
        
            <div className="review bg-light border ">
            <img className="rounded-2 img-fluid img-thumbnail" src={img} alt="" />
            <h3 className="fst-italic text-primary">{name}</h3>
            
            <p>{description}</p>
            <p>Rating : {rating}</p>
               
        </div>
        
    );
};

export default Review;
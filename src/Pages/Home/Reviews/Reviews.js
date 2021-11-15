import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Umratul/car-data-a12/main/data/data.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div id="reviews">
            <h2 className="text-primary mt-2 fst-italic">See What Our Customers Are Saying</h2>
            <div className="review-container">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';

import useAuth from '../../hooks/useAuth';

import Service from './Service/Service';
import Question from '../Question/Question';

import Reviews from './Reviews/Reviews';


const Home = () => {
    
        const {user} = useAuth();

        const [services, setServices] = useState([]);
            useEffect(() => {
                fetch('https://murmuring-brook-04794.herokuapp.com/services')
                    .then(res => res.json())
                    .then(data => setServices(data));
            }, [])
        const sliceService = services.slice(0, 6);
        return (
            <div id="home">
                <Banner></Banner>
                <div>
                    <h1 className="text-primary fst-italic p-3">Popular Brands</h1>
                    
                <div className="service-container">
                    {
                        sliceService.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                        }
                    </div> 
                </div>
                <Reviews></Reviews>
                <Question></Question>
                
            </div>
        );

    
};

export default Home;
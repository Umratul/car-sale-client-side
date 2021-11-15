import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    
    useEffect(() => {
        fetch(`https://murmuring-brook-04794.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
        <h2 className="bg-info m-5 p-3">Purchased <span className="text-danger">{service.name}</span></h2>
        </div>
    );
};

export default Purchase;
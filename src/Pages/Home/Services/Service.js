import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { price, description, image } = service;
    return (
        <div className="service">
            <h5>Type: {description}</h5>
            <img src={image} alt="" width="300px" />
            <p>Price: ${price}</p>
            <button>Checkout</button>
        </div>
    );
};

export default Service;
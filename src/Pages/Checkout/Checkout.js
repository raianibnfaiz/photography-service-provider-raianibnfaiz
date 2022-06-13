import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { checkoutId } = useParams();
    return (
        <div className="text-center">
            <h1>Checkout Detail About The Service Id {checkoutId}</h1>
            <h2>Three types of service are available :</h2>
            <h4>Wedding Photography</h4>
            <h4>Event Photography</h4>
            <h4>Portrait Photography</h4>
        </div>
    );
};

export default Checkout;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const { id, price, description, image } = props.service;
    const navigate = useNavigate();
    const handleNavigateServiceDetail = (id) => {
        navigate(`/checkout/${id}`)
    }
    return (
        <div className="text-center p-1 border g-4  ">
            <h5 className="m-4">Type: {description}</h5>
            <img src={image} alt="" width="320px" />
            <p className='text-center'>Price: ${price}</p>
            <div className='text-center'>
                <button onClick={() => handleNavigateServiceDetail(id)} className='btn btn-success  mb-1 '>Checkout</button>
            </div>
        </div>
    );
};

export default Service;
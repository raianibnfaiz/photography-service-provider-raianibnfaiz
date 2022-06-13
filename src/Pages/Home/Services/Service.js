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
        // <div className="text-center p-1 border g-4  mb-5">
        //     <h5 className="m-4">Type: {description}</h5>
        //     <img src={image} alt="" width="320px" />
        //     <p className='text-center'>Price: ${price}</p>
        //     <div className='text-center mb-5'>
        //         <button onClick={() => handleNavigateServiceDetail(id)} className='btn btn-success  mb-1 '>Checkout</button>
        //     </div>
        // </div>
        <div className="card m-2" style={{ width: "19rem" }}>
            <img className="card-img-top" src={image} alt="" />
            <div className="card-body mb-5">
                <div className='text-center mb-5'>
                    <p className='text-center'>Price: ${price}</p>
                    <button onClick={() => handleNavigateServiceDetail(id)} className='btn btn-success  mb-1 '>Checkout</button>
                    <h5 className="m-4"><span style={{ color: "orange" }}>Service: </span>{description}</h5>
                </div>
            </div>
        </div>

    );
};

export default Service;
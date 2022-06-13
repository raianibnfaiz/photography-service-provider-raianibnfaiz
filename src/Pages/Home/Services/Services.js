import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([{
        "id": "1",
        "image": "https://i.ibb.co/74v9ghf/colton-sturgeon-od-Ke-TFs-BDg-E-unsplash.jpg",
        "price": "50",
        "description": "Portrait photography",
        "details": "We will provide you the best service of Portrait photography."
    },
    {
        "id": "2",
        "image": "https://i.ibb.co/GVFPZwM/jeremy-wong-weddings-K8-Ki-CHh4-WU4-unsplash.jpg",
        "price": "250",
        "description": "Event photography",
        "details": "No one can beat our service of Event photography. "
    },
    {

        "id": "3",
        "image": "https://i.ibb.co/tXkyvpX/redd-y4b-E8-ST-CTg-unsplash.jpg",
        "price": "350",
        "description": "Wedding photography",
        "details": "You will be amazed when you will get our service of Wedding photography."

    }]);
    // useEffect(() => {
    //     fetch("services.json")
    //         .then(result => result.json())
    //         .then(data => setServices(data))
    // }, [])
    return (
        <div id='services' className=' mb-4'>
            <h1 className=' service mt-3' >Our <span style={{ color: "tomato" }}>Services</span></h1>
            <div className=' row row-cols-1 row-cols-md-3 mx-auto w-75 mb-4'>
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>


        </div>
    );
};

export default Services;
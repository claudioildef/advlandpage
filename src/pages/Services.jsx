import React from 'react';
import '../assets/styles/Services.css';
import { services } from "../assets/arrays/services";

const Services = () => {
  return (
    <div className='container'>
      <h1>Serviços</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={require(`../assets/img/${service.imgPath}`)} alt={service.title} />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

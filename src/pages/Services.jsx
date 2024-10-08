import React, { useState, useEffect } from 'react';
import '../assets/styles/Services.css';
import { services } from "../assets/arrays/services";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = (service) => {
    setSelectedService(service);
    setShowDetails(false); // Reseta a exibição dos detalhes
  };

  useEffect(() => {
    if (selectedService) {
      // Adiciona um delay antes de mostrar os detalhes
      const timer = setTimeout(() => {
        setShowDetails(true);
      }, 500); // 0.5s de atraso para a exibição dos detalhes

      return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
    }
  }, [selectedService]);

  return (
    <div className="container">
      <h1>Serviços</h1>
      <div className={`services-wrapper ${selectedService ? 'shift' : ''}`}>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className={`service-item ${selectedService && selectedService.title === service.title ? 'selected' : ''}`}
              key={index}
              onClick={() => handleClick(service)}
            >
              <p>{service.title}</p>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className={`service-details ${showDetails ? 'show' : ''}`}>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;

import React, { useState, useEffect, forwardRef } from 'react';
import styles from '../assets/styles/Services.module.css';
import { services } from "../assets/arrays/services";

// Modifiquei a função forwardRef para aceitar ref corretamente
const Services = forwardRef((props, ref) => {
  const [selectedService, setSelectedService] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = (service) => {
    if (service === selectedService) {
      setSelectedService(null);
      setShowDetails(false);
    } else {
      setSelectedService(service);
    }
  };

  useEffect(() => {
    if (selectedService) {
      const timer = setTimeout(() => {
        setShowDetails(true);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [selectedService]);

  return (
    <div className={styles.valuesBackground} ref={ref} id="services">
      <div className={styles.container}>
        <h1>Serviços</h1>
        <div className={`${styles.servicesWrapper} ${selectedService ? styles.shift : ''}`}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                className={`${styles.serviceItem} ${selectedService && selectedService.title === service.title ? styles.selected : ''}`}
                key={index}
                onClick={() => handleClick(service)}
              >
                <p>{service.title}</p>
              </div>
            ))}
          </div>

          {showDetails && (
            <div className={`${styles.serviceDetails} ${showDetails ? styles.show : ''}`}>
              <p className={styles.btnSair} onClick={() => {
                setShowDetails(false);
                setSelectedService(null);
              }}>{"<"}</p>
              <h2>{selectedService.title}</h2>
              <p>{selectedService.desc}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

// Exporta o componente
export default Services;

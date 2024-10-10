import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/img/logoclean.png';
import styles from '../assets/styles/Header.module.css';

const Header = ({ valuesRef, servicesRef, contactRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);



  const goTo = (ref) => {
    console.log(ref)
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <img className={styles.logo} src={logo} alt="Monteiro Castilho" width={120} />
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <ul>
          <li><a name="values" onClick={() => goTo(valuesRef)}>Valores</a></li>
          <li><a name="services" onClick={() => goTo(servicesRef)}>Serviços</a></li>
          <li><a onClick={() => goTo(contactRef)}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

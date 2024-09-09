import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import logo from '../assets/img/logoclean.png'
import '../assets/styles/Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <img className="logo" src={logo} alt="Monteiro Castilho" width={120}></img>
          <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        </header>
      );
}

export default Header
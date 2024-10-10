import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import Home from './pages/Home';
import Founder from './pages/Founder';
import Values from './pages/Values';
import Services from './pages/Services';



function App() {

  const valuesRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header valuesRef={valuesRef} servicesRef={servicesRef} contactRef={contactRef} />
      <Home ref={contactRef} />
      <Founder />
      <Services ref={servicesRef} />
      <Values ref={valuesRef} />
      <Footer className='footer' />
    </>
  );
}

export default App;

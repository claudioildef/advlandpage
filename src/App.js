import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import Home from './pages/Home';
import Founder from './pages/Founder';
import Values from './pages/Values';
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
  return (
    <>
      <Header />
      <Home />
      <Founder />
      <Values />
      <Services />
      <Contact />
      <Footer className='footer' />
    </>
  );
}

export default App;

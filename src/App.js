import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import RouterComponent from './components/Router';
import ServiceDetails from './components/ServiceDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <RouterComponent />
        <div className='content'>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/services/:id" element={<ServiceDetails/>} />
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

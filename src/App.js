import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import RouterComponent from './components/Router';
import ServiceDetails from './components/ServiceDetails';

const App = () => {
  return (
    <Router>
      <div>
        <RouterComponent />
    
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/services/:id" element={<ServiceDetails/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

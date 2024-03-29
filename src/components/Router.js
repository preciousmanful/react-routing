// Router.js
import React from 'react';
import { NavLink } from 'react-router-dom';


const Router = () => {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Router;

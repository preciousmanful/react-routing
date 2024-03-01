// Router.js
import React from 'react';
import { Link } from 'react-router-dom';

const Router = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Router;

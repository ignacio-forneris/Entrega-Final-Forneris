import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartWidget from '../CartWidget/Cartwidget';

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <h2 className="navbar-brand" onClick={() => navigate('/')}>NEWRUN</h2>
          <div className="navbar-nav mr-auto">
            <Link to="/category/Protesis" className="nav-link">Protesis</Link>
            <Link to="/category/Plantillas" className="nav-link">Plantillas</Link>
            <Link to="/category/Scooters" className="nav-link">Scooters</Link>
          </div>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
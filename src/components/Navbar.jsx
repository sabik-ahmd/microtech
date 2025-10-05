import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Micro Tech</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/certificate">Certificate</Link>
      </div>
    </nav>
  );
}

export default Navbar;
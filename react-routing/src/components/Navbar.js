import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Component Life Cycle</h1>
      <div className="navbar-components">
        <Link to={'/Mounting'}>Mounting </Link>
        <Link to={'/Unmounting'}>Unmounting </Link>
        <Link to={'/Updation'}>Updation </Link>
      </div>
    </div>
  );
};
export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-head">
      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/About">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;

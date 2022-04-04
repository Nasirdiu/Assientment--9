import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-head">
      <nav className="nav">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/review">Review</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/About">About</CustomLink>
      </nav>
    </div>
  );
};

export default Navbar;

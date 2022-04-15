import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <li className="text-slate-100 hover:text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="text-orange-300 hover:text-orange-400">
        <Link to="/about">About</Link>
      </li>
      <li className="text-blue-300 hover:text-blue-400">
        <Link to="/knowledgebase">Knowledgebase</Link>
      </li>
      <li className="text-green-300 hover:text-green-400">
        <Link to="/portfolio">Portfolio</Link>
      </li>
    </div>
  );
};

export default Navbar;

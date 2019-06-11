import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar(){
  return (
    <div className="navbar">
   	 	<Link to="/">Home</Link>
      <Link to="/docs/">Docs</Link>
      <Link to="/download/">Download</Link>
      <Link to="/contact/">Contact</Link>
      <a className="exclude">1.0.0 - Beta</a>
    </div>

  );
}

export default Navbar;
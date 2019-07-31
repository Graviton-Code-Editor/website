import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "../logo.svg"

let theme = "dark";

function goHome(){
	window.location = "https://graviton.ml";
}
function theming(){
  console.log(theme)
  if(theme==="dark"){
    document.documentElement.style.setProperty('--text', 'black');
    document.documentElement.style.setProperty('--primary-color', 'white');
    theme = "light";
  }else{
    document.documentElement.style.setProperty('--text', 'white');
    document.documentElement.style.setProperty('--primary-color', 'black');
    theme = "dark";
  }
}
function Docs() {
  window.open("https://github.com/Graviton-Code-Editor/Graviton-App/wiki")
}

function Navbar(){
    return (
    <div className="navbar">
      <img  alt="Graviton"  onClick={goHome} className="logo exclude" src={Logo}/>
      <Link to="/">Home</Link>
      <span onClick={Docs} className="link">Docs</span>
      <Link to="/contribute/">Contribute</Link>
      <Link to="/contact/">Contact</Link>
      <Link to="/faqs/">FAQs</Link>
      <span onClick={theming} className="link">Invert colors</span>
    </div>

  );
}

export default Navbar;
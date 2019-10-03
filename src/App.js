import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import Navbar from './views/navbar.js';


import FAQS from "./faqs.js";

import Logo from "./logo.svg"

function showDocs() {
  return(
    <div>
      <p>Navigate through the docs by clicking on the left-side list</p>
      <p>Something missing or wrong? Create a pull request or contact me.</p>
    </div>
    )
}

function SourceCode() {
  window.open("https://github.com/Graviton-Code-Editor/Graviton-App")
}

function Contact() {
  document.documentElement.style.setProperty('--logo', 'auto');
  return (
  <div className="content">
    <p className="text2">You can email me at mespinsanz@gmail.com </p>
    <a className="text2 link" href="https://github.com/marc2332">Github</a>
  </div>
  );
}
function Contribute() {
  document.documentElement.style.setProperty('--logo', 'auto');
  return (
  <div className="content">
    <p onClick={SourceCode} className="text2 link">Source code</p>
    
    <p class="text2">I really like to see people collaborating to Graviton, it's really cool.
    Here, there are some ways you can choose:</p>
    <ul class="text">
      <li>Adding or improving existing languages</li>
      <li>Revise the commits</li>
      <li>Opening issues or help on answering them</li>
      <li>Request features</li>
      <li>Revise documentation</li>
      <li><a class="link" href="https://www.paypal.me/mkenzo8">Paypal</a></li>
      <li><a class="text3" >BTC address: 1HCBeYD564Y3AjQ3Ci6Fp2zosfZvevJuu6</a></li>
    </ul>
    <p class="text2">Other kind of collarborations are welcomed 🚀🙏 </p>
  </div>
  );
}
function openDownloads(){
  window.open("https://github.com/Graviton-Code-Editor/Graviton-App/releases")
}
function openSources(){
  window.open("https://github.com/Graviton-Code-Editor/Graviton-App")
}
function Home() {
  document.documentElement.style.setProperty('--logo', '0px');
  return (
  <div page="home" className="center">
    <div className="section" >
      <header>
        <img  alt="Graviton"  className="graviton" src={Logo}/>
      </header>
      <div className="vertical d-flex" content="right" >
        <span className="link" onClick={openDownloads} >download ></span>
      </div>
    </div>
  </div>
  );
}

function App() {
  return (
   <Router>
    <div className="App">
      <Navbar />
      <Route path="/" exact component={Home} />
      <div >
        <Route path="/contribute/" component={Contribute} />
        <Route path="/contact/" component={Contact} />
        <Route path="/faqs/" component={FAQS} />
      </div> 
    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import Navbar from './views/navbar.js';

import Page1 from "./docs/page1.js";
import Page2 from "./docs/page2.js";
import Page3 from "./docs/page3.js";
import Page4 from "./docs/page4.js";
import Page5 from "./docs/page5.js";

import Logo from "./logo.svg"

function showDocs() {
  return(
    <div>
      <p>Navigate through the docs by clicking on the left-side list</p>
      <p>Something missing or wrong? Create a pull request or contact me.</p>
    </div>
    )
}

function Docs() {
  document.documentElement.style.setProperty('--logo', 'auto');
  return (
    <div className="content docs">
     <Router>
        <div className=" content sidebar ">
          <ul>
            <Link to="/docs/page1/">Explaining .graviton</Link>
            <Link to="/docs/page2/">Extensions installation</Link>
            <Link to="/docs/page3/">Making a plugin</Link>
            <Link to="/docs/page4/">Graviton API 1</Link>
            <Link to="/docs/page5/">Graviton API 2</Link>
          </ul>
        </div>
        <div className=" markdown-container">
          <Route path="/docs/" exact component={showDocs} />
          <Route path="/docs/page1/" exact component={Page1} />
          <Route path="/docs/page2/" component={Page2} />
          <Route path="/docs/page3/" component={Page3} />
          <Route path="/docs/page4/" component={Page4} />
          <Route path="/docs/page5/" component={Page5} />
        </div>
      </Router>
    </div>
  );
}

function Contact() {
  document.documentElement.style.setProperty('--logo', 'auto');
  return (
  <div className="content">
    <p class="text2">You can email me on mespinsanz@gmail.com </p>
    <a className="link" href="https://github.com/marc2332">Github</a>
  </div>
  );
}
function Contribute() {
  document.documentElement.style.setProperty('--logo', 'auto');
  return (
  <div className="content">
    <p class="text">I really like to see people collaborating to Graviton, it's really cool.
    Here, there are some ways you choose:</p>
    <ul class="text">
      <li>Adding or improving existing languages</li>
      <li>Revise the commits</li>
      <li>Opening issues or help on answering them</li>
      <li>Request features</li>
      <li>Revise documentation</li>
      <li><a class="link" href="https://www.paypal.me/mkenzo8">Paypal</a></li>
      <li><a class="text" >BTC address: 1HCBeYD564Y3AjQ3Ci6Fp2zosfZvevJuu6</a></li>
    </ul>
    <p class="text">Other kind of collarborations are welcomed 🚀🙏 </p>
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
        <Route path="/docs/" component={Docs} />
        <Route path="/contribute/" component={Contribute} />
        <Route path="/contact/" component={Contact} />
      </div> 
    </div>
    </Router>
  );
}

export default App;
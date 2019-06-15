import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import Navbar from './views/navbar.js';

import Page1 from "./docs/page1.js";
import Page2 from "./docs/page2.js";
import Page3 from "./docs/page3.js";
import Page4 from "./docs/page4.js";

function Docs() {
  return (
    <div className="content docs">
     <Router>
        <div className="sidebar">
          <ul>
            <Link to="/page1/">.graviton</Link>
            <Link to="/page2/">Extensions installation</Link>
            <Link to="/page3/">Making a plugin</Link>
            <Link to="/page4/">Plugins API</Link>
          </ul>
        </div>
        <div className="content markdown-container">
        <b>The docs are not completed yet!!</b>
          <Route path="/page1/" component={Page1} />
          <Route path="/page2/" component={Page2} />
          <Route path="/page3/" component={Page3} />
          <Route path="/page4/" component={Page4} />
        </div>
      </Router>
    </div>
  );
}

function Contact() {
  return (
  <div>
    <a className="button" href="https://github.com/marc2332">Github</a>
    <p class="text">You can email me on mespinsanz@gmail.com </p>
  </div>
  );
}
function Download() {
  return (
  <div>
    <button onClick={openDownloads} className="button">Windows</button>
    <button onClick={openDownloads} className="button">Linux</button>
    <button onClick={openDownloads} className="button">MacOS</button>
  </div>
  );
}
function Contribute() {
  return (
  <div>
    <p class="text">I really like to see people collaborating to Graviton, it's really cool.
    Here, there are some ways you choose:</p>
    <ul class="text">
      <li>Adding or improving existing languages</li>
      <li>Revise the commits</li>
      <li>Opening issues or help on answering them</li>
      <li>Request features</li>
      <li>Revise documentation</li>
      <li><a class="text" href="https://www.paypal.me/mkenzo8">Paypal</a></li>
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
  return (
  <div>
    <div className="section center" >
      <header>
        <p className="title">Graviton</p>
        <p className="text"> A cross-platform code editor.</p>
      </header>
      <Link className="button important" to="/download/">Download</Link>
      <button onClick={openSources} className="button "> Source code</button>
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
      <div className="content">
        <Route path="/docs/" component={Docs} />
        <Route path="/contribute/" component={Contribute} />
        <Route path="/download/" component={Download} />
        <Route path="/contact/" component={Contact} />
      </div> 
    </div>
    </Router>
  );
}

export default App;
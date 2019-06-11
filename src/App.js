import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import './App.css';

import Navbar from './views/navbar.js';

import Page1 from "./docs/page1.js";
import Page2 from "./docs/page2.js";
import Page3 from "./docs/page3.js";


function Docs() {
  return (
    <div className="content docs">
     <Router>
        <div className="sidebar">
          <ul>
            <Link to="/page1/">.graviton</Link>
            <Link to="/page2/">Extensions installation</Link>
            <Link to="/page3/">Making a plugin</Link>
          </ul>
        </div>
        <div className="content markdown-container">
          <Route path="/page1/" component={Page1} />
          <Route path="/page2/" component={Page2} />
          <Route path="/page3/" component={Page3} />
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
    <p class="text">There are many ways of contributing to Graviton:</p>
    <ul class="text">
      <li>Adding or improving existing languages</li>
      <li>Revise the commits</li>
      <li>Opening issues or help on answering them</li>
      <li>Request features</li>
      <li>Revise documentation</li>
      <li><a class="text" href="https://www.paypal.me/mkenzo8">Donating</a></li>
    </ul>
  </div>
  );
}
function openDownloads(){
  window.open("https://github.com/Graviton-Code-Editor/Graviton-App/releases")
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
      <button className="button "> Source code</button>
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

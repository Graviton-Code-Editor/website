import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import './App.css';

import Navbar from './views/navbar.js';

import Page1 from "./docs/page1.js";
import Page2 from "./docs/page2.js";


function Docs() {
  return (
    <div className="content docs">
     <Router>
        <div className="sidebar">
          <ul>
            <Link to="/page1/">Page1</Link>
            <Link to="/page2/">Page2</Link>
          </ul>
        </div>
        <div className="content markdown-container">
          <Route path="/page1/" component={Page1} />
          <Route path="/page2/" component={Page2} />
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
function openDownloads(){
  window.open("https://github.com/Graviton-Code-Editor/Graviton-App/releases")
}
function Home() {
  return (
  <div className="center" >
    <header>
      <p className="title">Graviton</p>
      <p className="text"> A new code editor.</p>
    </header>
    <Link className="button important" to="/download/">Download</Link>
    <button className="button "> Source code</button>
  </div>
  );
}

function App() {
  return (
   <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/docs/" component={Docs} />
        <Route path="/download/" component={Download} />
        <Route path="/contact/" component={Contact} />
      </div> 
    </div>
    </Router>
  );
}

export default App;

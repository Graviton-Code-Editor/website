import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function Page2() {
  return (
    <ReactMarkdown className="markown-container" source={` ## Testing 
     
	- Test2

    `} />
  );
}
export default Page2;
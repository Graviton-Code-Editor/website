import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function Page3() {
	const data = `

## Making a plugin

Still on testing...

     

	`;
  return (
    <ReactMarkdown className="markown-container" source={data} />
  );
}
export default Page3;
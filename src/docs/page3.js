import React from 'react';
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

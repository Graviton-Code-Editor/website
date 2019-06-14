import React from 'react';
import ReactMarkdown from "react-markdown";

function Page1() {
	const data = `

## .graviton explanation
     
When Graviton is installed in a machine, it creates a folder (.graviton) which contains basic data, as configuration, recents projects, plugins, etc...
The structure looks like:

|-.graviton
  |-- highlights
  |-- plugins
  |-- plugins_db
  |-- themes
  |-- config.json
  |-- log.json


The path where is installed varies on every operative system:

| OS   			| Path |
| --------- | ---- |
| Windows   | C:\\Users\\username\\AppData\\Roaming\\.graviton |
| Linux 		| /home/username/.config/.graviton |
| MacOS     | /users/username/library/applications support/.graviton |

	`;
  return (
    <ReactMarkdown className="markown-container" source={data} />
  );
}
export default Page1;

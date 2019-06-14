## Making a plugin

Go to the .graviton directory (see .graviton explanation)

There let's create a folder inside /plugins , so it would look like:

|-.graviton
  |-- plugins
  	|-- myPlugin

Now, move inside your plugin and create two files, like:

|-- myPlugin
	|-- package.json
	|-- main.js

```
{
	"name":"myPlugin",
	"version":"0.0.1",
	"author":"Marc Espín",
	"description":"A super plugin!",
	"folder":"myPlugin",
	"main":"main.js",
	"javascript":[],
	"css":[]
}   
```
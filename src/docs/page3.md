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

Inside package.json copy this:

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
Inside main.js copy this:

```
const myPluginInstace = new Plugin({
  name: "myPlugin"
})
const myPluginDropMenu = new dropMenu({
	id:"my_plugin_dm"
});
myPluginDropMenu.setList({
  "button": "My Plugin!",
  "list":{
  	"Click me!":"coolNotification();"
  }
})

function coolNotification(){
	new Notification('Whoah!!','A notification!');
}

```

Reboot Graviton and check the Toolbar! 🚀
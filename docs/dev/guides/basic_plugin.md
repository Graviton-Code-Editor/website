---
title: 🧵 Basic dynamic plugin
slug: dev/guides/basic_plugin
description: How to make a basic plugin

---


[Sample plugin](https://github.com/Graviton-Code-Editor/sample-plugin)

## Setup

1. Create the folder for your plugin in your [.graviton2](https://github.com/Graviton-Code-Editor/Graviton-App/wiki/docs/.graviton2.md)/plugins directory.

	* Call the folder what you want: `mkdir BasicPlugin`.
2. Navigate into your folder: `cd BasicPlugin`.

3. Now, let's create our package.json (You can use `npm init` if you wish.)

	|  Property     &nbsp; &nbsp; &nbsp;| Definition                                                 |
	| ----------------------------------|----------------------------------------------------------: |
	| `name`        &nbsp; &nbsp; &nbsp;| Plugin's name                                              |
	| `id`          &nbsp; &nbsp; &nbsp;| Plugin's id (no spaces)                                    |
	| `main`        &nbsp; &nbsp; &nbsp;| Location of your entry file                                |
	| `description` &nbsp; &nbsp; &nbsp;| Brief descrption of the plugin                             |
	| `author`      &nbsp; &nbsp; &nbsp;| Author's name                                              |
	| `version`     &nbsp; &nbsp; &nbsp;| Current version of the plugin                              |

	##### Example:
	```json
	{
		"name": "BasicPlugin",
		"id": "basic-plugin",
		"main": "main.js",
		"description": "A very cool plugin",
		"author": "Superman",
		"version": "1.0.0"
	}
	```

4. Now, create your entry file: `touch main.js`.

5. <strong>Code</strong>

	Paste this code in your entry file (`main.js`):

	```javascript
	function entry(API){
	  new API.Notification({
	    title: 'A cool notification!',
	    content: 'Some content :)'
	  })
	}

	module.exports = { entry }
	```

	> What is this code doing?
	1. We have declared our entry function, which will be executed when Graviton loads the plugin.
	2. The entry function has only one argument, which is the API:
		* The API is an object containing all the different components and methods you can use in your plugin.
	3. The entry function is creating a Notification, to which it passes an object as the parameter. 
		* The object has two properties: the title for the Notification and the content to display in the body of the Notification.
		* More about Notifications can be found [here](/docs/dev/api/notification).
	4. Lastly, we export the entry function so Graviton can recognize and execute it.
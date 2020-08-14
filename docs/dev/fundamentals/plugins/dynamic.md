---
title: Dynamic plugins
slug: dev/fundamentals/plugins/dynamic
description: Dynamic plugins

---


Dynamic plugins ( or JavaScript plugins ) are dynamically loaded in live when Graviton is opened.

Every dynamic plugin should indicate it's entry file ( Main file ) in it's package.json so Graviton knows what file should be loaded.

Example supossing we have a `main.js` file in the same root as the package.json:

```json
{
	"name": "SuperPlugin",
	"version":"1.0.0",
	"id": "com.superplugin",
	"description":"Interesting plugin",
	"author":"Superman",
	"type":"plugin",
	"main": "main.js"
}
```

## Entry function

Entry function is the function executed when Graviton loads the file, it contains the whole exposed API for plugins. 
So, it must be exported.

Example:

```ts
function entry(API){
	//Here you can make use of the API
}

module.exports = {
	entry
}
```
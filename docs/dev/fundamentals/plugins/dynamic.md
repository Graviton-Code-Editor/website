---
title: Dynamic plugins
slug: dev/fundamentals/plugins/dynamic
description: Dynamic plugins

---


Dynamic plugins ( or JavaScript plugins ) are dynamically loaded in live when Graviton is opened.

Every dynamic plugin should indicate it's entry file ( Main file ) in it's package.json so Graviton knows what file should be loaded.

## Example:
Supose we have a `main.js` file in the same root as the package.json.
### package.json
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

### Entry function

The entry function is the function that is executed when Graviton loads the file, it contains the exposed API for plugins. 
So, it must be exported.

```ts
function entry(API){
	//Here you can make use of the API
}

module.exports = {
	entry
}
```
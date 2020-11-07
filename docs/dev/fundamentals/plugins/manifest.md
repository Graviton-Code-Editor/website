---
title: Manifest file
slug: dev/fundamentals/plugins/manifest

---


The **Manifest** file is used to identify each plugin. It contains the plugin's name, the descripton, author, etc...

The Manifest file's name is `package.json`, same as NPM packages.

Required properties in the Manifest file (used for all types of plugins):

```json
{
	"name": "SuperPlugin",
	"version":"1.0.0",
	"id": "com.superplugin",
	"description":"Interesting plugin",
	"author":"Superman"
}
```

Depending on the type of plugin some other properties are required.
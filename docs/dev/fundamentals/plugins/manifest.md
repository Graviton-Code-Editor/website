---
title: Manifest file
slug: dev/fundamentals/plugins/manifest

---


The **manifest** is a file used to identify each plugin. It contains the plugin's name, the descripton, author, etc...

The manifest file's name is `package.json`, same as NPM packages.

Essential properties in the manifest (these are used across all types of plugins):

```json
{
	"name": "SuperPlugin",
	"version":"1.0.0",
	"id": "com.superplugin",
	"description":"Interesting plugin",
	"author":"Superman"
}
```

Depending on the type of plugin it must have some other properties.
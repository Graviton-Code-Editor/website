---
title: Themes
slug: dev/fundamentals/plugins/themes
description: Themes

---

Graviton themes are handled via properties, not CSS stylesheets, to ensure stability over time.


> **Note**: I recommend you to take [this](https://github.com/Graviton-Code-Editor/sample-theme) as base when making a theme from scratch since there are a lot of properties. 

Manifest's properties needed for themes:

* textTheme: Used to specify what CodeMirror syntax theme to use.
* fileTheme (optional): If you have a custom CodeMirror syntax theme, specify the file which contains it here.
* type: Type of the plugin, in this case "theme".
* colorScheme: Contains all color changes in the form of properties.

Example (simplified):

```json
{
	"name": "SuperPlugin",
	"version":"1.0.0",
	"description":"Interesting plugin",
	"author":"Superman",
	"id": "com.superplugin",
	"textTheme":"night",
	"type":"theme",
	"colorScheme": {
		... //properties
	}
}
```

Example (simplified) with a custom CodeMirror theme (can either be css or sass):

```json
{
	"name": "SuperPlugin",
	"version":"1.0.0",
	"description":"Interesting plugin",
	"author":"Superman",
	"id": "com.superplugin",
	"textTheme":"sunnyday",
	"fileTheme":"sunnyday_theme.css",
	"type":"theme",
	"colorScheme": {
		... //properties
	}
}
```
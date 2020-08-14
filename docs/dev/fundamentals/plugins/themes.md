---
title: Themes
slug: dev/fundamentals/plugins/themes
description: Themes

---

Graviton themes are handled via properties, not CSS stylesheets, this ensures it's stability through time.


> **Note**: I recommend you to take [this](https://github.com/Graviton-Code-Editor/sample-theme) as base when making a theme from scratch since there are a lot of properties. 

Manifest's properties needed for themes:

* textTheme: indicates what color highlighting must be loaded,
* type: type of the plugin, in this case "theme"
* colorScheme: where all theme's properties are stored

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
---
title: Themes
slug: dev/fundamentals/plugins/themes
description: Themes

---

Graviton themes are handled via properties, not CSS stylesheets, this ensures it's stability through time.

I recommend you to take as base [this](https://github.com/Graviton-Code-Editor/sample-theme) when making a theme from scratch since there are a lot of properties. 

package.json's properties needed for themes:

* textTheme: indicates what color highlighting must be loaded,
* type: type of the plugin, in this case "theme"

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
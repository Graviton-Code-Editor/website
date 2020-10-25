---
title: 📦 How do Plugins work?
slug: dev/fundamentals/plugins
description: How do plugins work?

---


Graviton loads all the plugins located in your `.graviton2/plugin`.

As NPM projects, the `package.json` is used as manifest file.

Essential properties of the package.json:

```json
{
	"name": "SuperPlugin",
	"version":"1.0.0",
	"id": "com.superplugin",
	"description":"Interesting plugin",
	"author":"Superman"
}
```


---
title: 🎭 Iconpacks
slug: dev/fundamentals/plugins/iconpacks
description: Iconpacks

---

Iconpacks consist on a set of different types of rules.

package.json's properties needed for themes:

* icons: icons matches
* type: plugin's type, in this case, 'iconpack'

Rules are stored in the plugin's package.json under property `icons`.

Example:

```json
{
	"name":"some cool plugin",
	"id":"some_cool_plugin",
	"description":"A cool iconpack, I promise.",
	"version":"1.0.0",
	"author":"ACoolHuman",
	"type": "iconpack",
	"icons":{
		"package.json": {
			"icon": "./icons/package_json_icon.svg",
			"type": "filename"
		}
	}
}
```

## filename
Match by file's name.

Example, considering we have a file named `package.json`:
```json
{
	...
	"icons":{
		"package.json": {
			"icon": "./icons/package_json_icon.svg",
			"type": "filename"
		}
	}
}
```

## filetype
Match by file's type.

Example, considering we have a file named `whatever.cool.js`:
```json
{
	...
	"icons":{
		"cool.js": {
			"icon": "./icons/cool_icon.svg",
			"type": "filetype"
		}
	}
}
```

This will match every file ending with 'cool.js'

## foldername
Same as filename but for folders.

Example, considering we have a file named `magic`:
```json
{
	...
	"icons":{
		"magic": {
			"icon": "./icons/magic_closed_icon.svg",
			"openedIcon": "./icons/magic_opened_icon.svg",
			"type": "foldername"
		}
	}
}
```

* icon (aka closedIcon): icon displayed when the folder is closed
* openedIcon: icon displayed when the folder is opened.

## basicfile
When Graviton doesn't recognize a file's format, it will show a unknown file, aka Basic file.
```json
{
	...
	"icons":{
		"file": {
			"icon": "./icons/file_icon.svg",
			"type": "basicfile"
		},
	}
}
```

## basicfolder
This applies for the normal folder icon.

```json
{
	...
	"icons":{
		"folder": {
			"icon": "./icons/folder.closed.svg",
			"openedIcon": "./icons/folder.opened.svg",
			"type": "basicfolder"
		},
	}
}
```

* icon (aka closedIcon): icon displayed when the folder is closed
* openedIcon: icon displayed when the folder is opened.

## basicimage
This applies for all images formats recognized in Graviton.

```json
{
	...
	"icons":{
		"image": {
			"icon": "./icons/image_icon.svg",
			"type": "basicimage"
		},
	}
}
```
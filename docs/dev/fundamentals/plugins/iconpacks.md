---
title: 🎭 Iconpacks
slug: dev/fundamentals/plugins/iconpacks
description: Iconpacks

---

Iconpacks consist of a set of different types of rules.

Required Manifest properties for iconpacks:

* type: Type of plugin, in this case, 'iconpack'.
* icons: Contains all the mappings for filetypes and its icon.

### Example:

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

## Types:
* [filename](#filename)
* [fileformat](#fileformat)
* [filetype](#filetype)
* [foldername](#foldername)
* [basicfile](#basicfile)
* [basicfolder](#basicfolder)
* [basicimage](#basicimage)

### filename<a name="filename"></a>
Matches files by filename.

##### Example
Suppose we have a file named `package.json`.
The correct rule for this would be the following:
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

### fileformat<a name="fileformat"></a>
Matches files by file extension.

##### Example
Suppose we have a file named `cool.ts`.
The correct rule for this would be the follwing:
```json
{
	...
	"icons":{
		"ts": {
			"icon": "./icons/typescript_icon.svg",
			"type": "fileformat"
		}
	}
}
```

> **Note**: </br>
fileformat is the default type, so you can omit it.
```json
{
	...
	"icons":{
		"ts": {
			"icon": "./icons/typescript_icon.svg"
		}
	}
}
```


### filetype<a name="filetype"></a>
Matches files by filetype.

##### Example
Suppose we have a file named `whatever.cool.js`:
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

This will match every file ending with 'cool.js'.

### foldername<a name="foldername"></a>
Matches folders by foldername.

##### Example
Suppose we have a file named `magic`:
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
> **Note**: 
* icon (aka closedIcon): Icon displayed when the folder is closed.
* openedIcon: Icon displayed when the folder is open.

### basicfile<a name="basicfile"></a>
> **Note**:</br>
When Graviton doesn't recognize a fileformat, it will show a unknown file which uses the basic file.

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

### basicfolder<a name="basicfolder"></a>
Matches any folder that is not matched by [foldername](#foldername).

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

### basicimage<a name="basicimage"></a>
Matches any image whose imageformat is recognized by Graviton.

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
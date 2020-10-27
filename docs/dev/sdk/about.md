---
title: 🧵 About
slug: dev/sdk/about
description: About Graviton's SDK

---

The Graviton SDK provides a toolchain for building all kinds of plugins for Graviton Editor.

### Installation

You can install it as a development dependency in your plugin:

```shell
npm install --save-dev @gveditor/sdk
```

### Usage

You can use it's CLI or access it's internal API for custom scripts.

#### CLI

Arguments: 
* `--project`: indicates where the plugin is stored (generally in the same directory, `./`)
* `--target`: indicates what type of plugin you want to build
   - plugin: JavaScript (aka dynamic) plugin
   - iconpack
   - theme
* `--mode`: indicates what kind of build you want to do
   - dev: Development build (will watch for changes)
   - release: A release build
   
#### Manifest

The Manifest file (aka package.json) needs an extra property when using Graviton's SDK:

* `mainSrc`: indicates the path of the source entry file.

##### Example:

```json
{
	"name": "ExamplePlugin",
	"version": "1.0.0",
	"id": "example-plugin",
	"main": "main.js",
	"mainSrc": "src/main.js",
	"author": "SuperMan",
	"scripts": {
		"watch": "gvsdk --project . --target plugin --mode dev",
		"build": "gvsdk --project . --target plugin --mode release"
	}
}
```

#### API

WIP.
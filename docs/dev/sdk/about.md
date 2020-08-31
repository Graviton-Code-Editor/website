---
title: 🧵 About
slug: dev/sdk/about
description: About Graviton's SDK

---

Graviton SDK provides a toolchain to build all kind of plugins for Graviton Editor.

### Installation

You can install it as a development dependency in your plugin:

```shell
npm install --save-dev @gveditor/sdk
```

### Usage

You can use it as CLI or access it's internal API  for custom scripts.

#### CLI

Arguments: 
* --entry: indicates where the package.json of the plugin is stored
* --target: indicates what type of plugin you want to build
   - plugin: JavaScript (aka dynamic) plugin
   - iconpack
   - theme
* --mode: indicates what kind of build you want to do
   - dev: Development build (it will watch for changes)
   - release: A release build
   
#### Manifest

The Manifest file (aka package.json) needs an extra property when using Graviton's SDK:

* mainSrc: indicates the path of the source entry file.

Example:

```json
{
	"name": "ExamplePlugin",
	"version": "1.0.0",
	"id": "example-plugin",
	"main": "main.js",
	"mainSrc": "src/main.js",
	"author": "SuperMan",
	"scripts": {
		"watch": "gvsdk --entry package.json --target plugin --mode dev",
		"build": "gvsdk --entry package.json --target plugin --mode release"
	}
}
```

#### API

WIP.
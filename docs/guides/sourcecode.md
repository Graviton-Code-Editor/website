---
title: 🧠 Source Code
slug: guides/sourcecode
description: Understanding the Source Code

---


Graviton's Source Code: https://github.com/Graviton-Code-Editor/Graviton-App

## Source

App's source is located under `Graviton-app/src`. 

* `javascript`: Contais all the app logic
	- `collections`: Collections are a way of properly load a bunch of files. Like all languages, CodeMirror modes and addons, etc..
	- `components`: here there are all the Graviton components, like Notifications, title bar, etc...
	- `constructor`: here there are the constructors, like Window, Dialog, Notification.
	- `defaults`: here there are default components, shortcuts, editor clients used in Graviton, like Settings or Welcome window.
	- `types`: here contains TypeScript interfaces used in Graviton internally.
	- `main.ts`: It contains the root component of the app.
* `sass`: Contains some essential styles, like Night and Arctic CodeMirror themes.

## Plugins
Built-in plugins are located under `Graviton-App/plugins`. There are 2 types of them.
* Dynamic
* Static

### Dynamic
Dynamic plugins are installed alongside Graviton and loaded dinamically loaded when Graviton Opens.
You cannot unninstall them.


### Static
Static plugins are compiled into the source code. You cannot uninstall them.

## Iconpacks
Built-in iconpacks are located under `Graviton-App/iconpacks`.

## Themes
Built-in plugins are located under `Graviton-App/themes`.

## Languages
Languages are located under `Graviton-App/languages`.

**Note**: English is used as reference and fallback.

## Assets
Fonts, logos, etc are located under `Graviton-App/assets`.

The app icons for every platform are located under `Graviton-App/assets/building`.




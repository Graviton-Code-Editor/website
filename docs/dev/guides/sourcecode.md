---
title: 🧠 Source Code
slug: dev/guides/sourcecode
description: Understanding the Source Code

---


Graviton's Source Code: https://github.com/Graviton-Code-Editor/Graviton-App

## Source

Graviton's source is located under `Graviton-app/src`. 
* `app`: Contains the startup scripts and handlers.
* `interface`: Contains all of the UI logic.
	- `collections`: Collections are a way of properly loading a bunch of files. For example: different languages, CodeMirror modes and addons, etc.
	- `components`: Contains all of Graviton components, like Notification, Title bar, etc.
	- `constructor`: Contains all of the constructors for components such as Window, Dialog, Notification.
	- `defaults`: Contains default components, default shortcuts, editor clients, sidepanels, etc... used in Graviton.
	- `core`: Contains core modules of Graviton, as RunningConfig, StaticConfig, etc...
	- `types`: here contains TypeScript types used in Graviton internally.
	- `main.ts`: It contains the root component of the app.
* `styles`: Contains some essential styles, like Night and Arctic CodeMirror themes.

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




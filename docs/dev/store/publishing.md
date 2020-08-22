---
title: 🎠 Publishing plugins
slug: dev/store/publishing

---

Fundamentals:
* Store is managed by Manifest files.
* Each Manifest represents a plugin.
* The Manifests are stored in https://github.com/Graviton-Code-Editor/store-api/tree/master/data in each's folder
* [Manifest schema](manifest)


## 🎉 Publishing a plugin

* Fork and clone https://github.com/Graviton-Code-Editor/store-api/
* Create a folder under store-api/data with your plugin's name
* Create the Manifest (`manifest.yaml`) inside your plugin's folder.
* Make a Pull Request to merge it

To make new releases you just need to make a PR adding the release into the `releases` property.

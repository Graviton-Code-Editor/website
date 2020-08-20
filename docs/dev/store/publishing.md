---
title: 🎠 Publishing plugins
slug: dev/store/publishing

---

Fundamentals:
* Store is managed  by Manifest files.
* Each Manifest represents a plugin.
* The Manifests are stored in https://github.com/Graviton-Code-Editor/store-api/tree/master/data

## 🎉 Publishing a plugin

You need to create a folder with your manifest inside, in `https://github.com/Graviton-Code-Editor/store-api/tree/master/data`.

To make new releases you just need to make a PR adding a releases into the `releases` property.

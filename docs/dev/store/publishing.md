---
title: 🎠 Publishing plugins
slug: dev/store/publishing

---

Fundamentals:
* The store is managed by Manifest files.
* Each Manifest represents a plugin.
* The Manifests are stored in https://github.com/Graviton-Code-Editor/store-api/tree/master/data in each's folder
* [Manifest schema](manifest)


## 🎉 Publishing a plugin

> **Important**: The plugin must have a decent quality to be published, and will be reviewed by maintainers. 

1. Fork https://github.com/Graviton-Code-Editor/store-api/
2. `git clone https://github.com/<YOUR USERNAME>/store-api.git`
3. `cd data`
4. `mkdir <PLUGIN-NAME>`
5. `cd <PLUGIN-NAME>`
6. Create a file called `manifest.yaml`.
7. In `manifest.yaml` put the following:
```yaml
name: <PLUGIN-NAME>
id: <ID-FOR-PLUGIN>
author: <YOUR-NAME>
description: <DESCRIPTION>
repository: <LINK-TO-PLUGIN-REPO>
releases:
 - version: <PLUGIN-VERSION>
   minTarget: <MINIMUM-GRAVITON-VERSION>
   target: <GRAVITON-VERSION>
   url: <LINK-TO-PLUGIN-RELEASE-ZIP>
```
##### About the yaml information above
* `id, repository, url`: __cannot__ contain whitespace
* `releases` is an array, so you can have multiple releases
* To create a release for your plugin:
  1. On your plugin's repository homepage, create a release and upload a `.zip` folder with only functional files for the plugin
  2. Once the release is published, copy the download-url, and release version of the release and paste into the `url`, `version` fields above respectively.
* `minTarget` will be the minimum version of Graviton(`X.X.X`)
* `target` will be a more specific target, you can for example use `2` to target Graviton v2.X.X, or `2.1` for v2.1.X
8. Commit changes and create PR

### 🎎 Contributing
#### Before commiting on git

* Get all your linting error (with ESlint)
```sh
$ npm run lint
```

* Fix all your linting error automatically (with ESlint)
```sh
$ npm run lint:fix
```

### 🧦 Testing

To run the tests, run:
```shell
$ npm test
```
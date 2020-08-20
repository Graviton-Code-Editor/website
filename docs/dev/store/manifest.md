---
title: 🧾 Manifest
slug: dev/store/manifest

---

The `Manifest`  is a YAML-formatted file which represents every plugin.

It must contain all these properties:
- name: Plugin's name
- id: Plugin's ID (this must be the same as used in the plugins source's manifest file (aka `package.json`))
- description: Brief description of what the plugin doest.
- author: Your name ( nicknames are also valid )
- repository: Source code remote repository
- releases: This is an array which contains all the releases of your plugin
  - version: Releases's version
	- minTarget: Minium Graviton's version
	- target: This is a regex
	- url: Release's download link ( I suggest using GitHub built-in Releases )


Example:

```yaml
name: Cargo
id: cargo-plugin
author: Marc Espín Sanz
description: Basic Cargo support.
repository: https://github.com/marc2332/cargo-graviton
releases:
  - version: 1.0.0
    minTarget: 2.0.84
    target: 2.0
    url: https://github.com/marc2332/cargo-graviton/releases/download/1.0.0/Cargo.zip
```
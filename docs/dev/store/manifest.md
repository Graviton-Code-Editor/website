---
title: 🧾 Manifest
slug: dev/store/manifest

---

The Manifest file(`manifest.yaml`) is a YAML-formatted file which contains all essential information for the plugin.

It must contain all the of the following properties:
- `name`: Plugin's name
- `id`: Plugin's ID (must match the `id` property in the plugin's `package.json`)
- `description`: Brief description of what the plugin does.
- `author`: Your name ( nicknames are also valid )
- `repository`: Source code remote repository
- `releases`: Array containing all the releases of the plugin.
  - `version`: Version of release.
  - `minTarget`: Mininum Graviton version.
  - `target`: This is a regex for more specific version matching.
  - `url`: See [Release's URL](manifest/#release_url)


### Example:

```yaml
name: Cargo
id: cargo-plugin
author: Marc Espín Sanz
description: Basic Cargo support.
repository: https://github.com/marc2332/cargo-graviton
releases:
  - version: 1.0.0
    minTarget: 2.0.92
    target: 2.0
    url: https://github.com/marc2332/cargo-graviton/releases/download/1.0.0/Cargo.zip
```

<div id="release_url">
	<h2>Release's URL(<code>url</code>)</h2>
	<ul>
		<li>
			Releases must be a ZIP file.
		</li>
		<li>
			The plugin's <code>package.json</code> file must be at the root of the plugin's folder.
		</li>
	</ul>
</div>
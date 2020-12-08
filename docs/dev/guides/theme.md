---
title: 🎨 Making a theme
slug: dev/guides/theme
description: How to make a theme

---


## Setup

Clone this repository (https://github.com/Graviton-Code-Editor/sample-theme) in your [.graviton2](/docs/dev/fundamentals/graviton2)/plugins directory.

```shell
git clone https://github.com/Graviton-Code-Editor/sample-theme.git
```

* You can rename it to whatever you want.

Navigate into the folder: `cd sample-theme`.

## Overview

If you read the file `package.json` you will see a tons of properties:

|  Property     &nbsp; &nbsp; &nbsp;| Definition                                                 |
| ----------------------------------|----------------------------------------------------------: |
| `name`        &nbsp; &nbsp; &nbsp;| Plugin's name                                              |
| `id`          &nbsp; &nbsp; &nbsp;| Plugin's id (no spaces)                                    |
| `author`      &nbsp; &nbsp; &nbsp;| Author's name                                              |
| `version`     &nbsp; &nbsp; &nbsp;| Current version of the plugin                              |
| `description` &nbsp; &nbsp; &nbsp;| Brief descrption of the plugin                             |
| `textTheme`   &nbsp; &nbsp; &nbsp;| Name of your codemirror theme                              |
| `fileTheme`   &nbsp; &nbsp; &nbsp;| Name of your codemirror theme's file (optional)            |
| `type`        &nbsp; &nbsp; &nbsp;| Type of the plugin, in this case 'theme'                   |
| `colorsScheme`&nbsp; &nbsp; &nbsp;| Scheme of the differents components and it's colors        |

**Note**: This template is based on built-in Graviton's Arctic theme.


## Developing

You can now modify the properties under colorsScheme.

To use a custom [CodeMirror](https://codemirror.net/doc/manual.html) theme you must specify it's file name in `fileTheme`.

For easier developement you can open a debug window from `"Window" > "Debug" > "Open debug window"` and then reload it each time you make a change.

Or you can also open Graviton in developement mode from the source code (see https://github.com/Graviton-Code-Editor/Graviton-App/blob/master/BUILDING.md#desktop)




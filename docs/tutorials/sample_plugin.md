---
title: Sample plugin
slug: tutorials/sample_plugin
description: How to make a sample plugin

---


[Source code](https://github.com/Graviton-Code-Editor/sample-plugin)

## Setup

Create the plugin folder in your [.graviton2](https://github.com/Graviton-Code-Editor/Graviton-App/wiki/docs/.graviton2.md)/plugins.

Name it as you wish:
```shell
mkdir SamplePlugin
```

Go inside it:
```shell
cd SamplePlugin
```

Now, let's create our package.json ( You can use `npm init` if you wish.)

| Property      | Definition                                                     |
| ------------- |----------------------------------------------------------------|
| name          | Plugin's name                                                  |
| id            | Technical name (no spaces)                                     |
| main          | Location of your entry file                                     |

Example:
```json
{
  "name": "SamplePlugin",
  "id": "sample-plugin",
  "main" :"main.js"
}
```

Now, create your entry:

```shell
touch main.js
```

## Code

Paste this code in your entry file (`main.js`):

```javascript
function entry(API){
  new API.Notification({
    title: 'A cool notification!',
    content: 'Some content :)'
  })
}

exports = { entry }
```

What is this code doing?
1. We have declared our entry function, this will be executed when Graviton loads the plugin.
2. The entry function has only one argument, it's the API, it's an object containing all the different components and methods you can use in your plugin.
3. As you can see, it's creating a Notification, it passes as an argument an object with two properties, the title and the content.
4. And finally, you export the entry function so Graviton can recognize and execute it.
---
title: Graviton v2 summary
slug: 2_graviton2_changes
date: "2020-06-08"
description: "Summary of Graviton v2 changes"
---

If you don't know Graviton has been through a lot of changes lately, it has a
new source made from scratch, read the
[announcement](https://graviton.netlify.ml/blog/graviton_remake/remake/)

Although there is still a long way to go, I'm gonna tell you some important
changes.

- 🕵️‍♂️ Git integration
- 💂‍♂️ Files watcher
- 🤹‍♀️ Workspaces
- 👨‍💻 Autocompletion
- 👩‍🎨 Flexible & maintenable themes
- 📦 Plugins
- 🎟 Plugins Store

### 🕵️‍♂️ Git integration

Graviton v2 now includes git support out of the box.

Screenshot of the new explorer panel with git support:

![Image](../explorer.png)

It also shows the total count of git changes in the project's folder.

### 💂‍♂️ Integrated files watcher

Graviton now ships with a files watcher, which means every change you make to
your files will automatically be updated in the explorer panel.

This can be desactivated.

### 🤹‍♀️ Workspaces

Graviton now has workspaces support by default. You can group various folders to
create an unique workspace, and then instead of opening every folder you can
just open the workspace and Graviton will open all of them.

You can specify custom configurations for each workspace, for example, the
theme, font size, tabs or spaces, etc.

### 👨‍💻 Autocompletion

Graviton had a custom autocompletion. The new version now has the CodeMirror
autocompletion enabled by default, it only supports some languages:

- JavaScript
- CSS
- SQL
- XML-like languages (example: HTML)

Why don't I add LSP support? Simple, I don't know how 😂

### 👩‍🎨 Flexible & maintenable themes

Graviton v1.X themes (with just a color scheme & no css) were no flexible, if
you changed a property color it might be look good in a component but bad in
another, then I added the option to use CSS. That "fixed" the issue but created
another one, maintainability, the theme could look good in for example v1.X1
but, what if the rules selectors didn't work anymore in v1.X2 ?

What I have done in Graviton v2 is pretty simple, it now has a lot of more
variables instead of CSS injection. You can still use CSS but it's goal is
CodeMirror themes and not to modify Graviton's UI.

### 📦 Plugins

The new API is so much consisten and stable. You can do a lot of stuff too.

Somethings you can do:

- Create notifications
- Create menus
- Create windows
- Create dialogs
- Create context menus
- Create custom tabs
- Create items in the status bar
- Access the runtime configuration and information
- Use external NodeJS packages

### 🎟 Plugins Store

The plugins store has been made from scratch, now every plugin can make a
release for for every Graviton version.

### Other changes

- There is now only one status bar, it's all unified.
- You can now drag and drop tabs between panels.
- Focused files are now highlighted in the explorer panel

### Want to try it?

Since there is no release yet you can build it by yourself, follow the
[instructions](https://github.com/Graviton-Code-Editor/Graviton-App/blob/master/BUILDING.md)

There is still a long way, there will be more things.

Thanks.

Join the discord -> https://discord.com/invite/gg6CTYA Join the Telegram Channel
-> https://t.me/gravitoneditor

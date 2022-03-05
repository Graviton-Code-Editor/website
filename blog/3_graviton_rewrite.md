---
title: Graviton v3 Rewrite
date: "2022-03-5"
slug: 3_graviton_rewrite
description: "Graviton v3"
---


Graviton is being rewritten, again.

## Reasons

The old Graviton (v2) suffered from performance issues, these could not be fixed without having to rewrite it. Some of these include the giant size of Electron, the slowness of NodeJS and the poor performance of PuffinJS.


## Changes

This new rewrite will be highly modular, meaning that even third-party editors can re-use the core and build their own frontends upon it. 

The backend of the app (including the core) is written in Rust, this means faster, safer, and more scalable code. 

The Desktop frontend is a web-app implementation served from TauriJS. This new web-app frontend is written in React, this means that it will be faster, and more scalable than it was with puffinJS. Tauri uses the OS's webview to show the app, this means that it  doesn't suffer from ElectronJS's giant size issue.

---
title: Editor Client
slug: dev/api/editor_client
description: Editor Client

---

A Editor Client is the component authored to display a file inside a tab. 

Example, the CodeMirror client ( built-in ), is used to display a CodeMirror (text editor) instance when you open a plain text file. 
Another example is the Image Viewer ( built-in too ), which is used to display image filess.

The Editor Client is just a API between Graviton and the code behind the editor client. This allows Graviton to have a more scalable architecture.

(WIP)
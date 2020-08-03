---
title: Graviton Remake
date: "2020-02-15"
slug: graviton_remake
cover: landscape.png
description: "Graviton v2 is coming"
---

**NOTE:** I have 0 experience on writing posts.

Graviton v2 is a made from ground up editor.

## Why?

Graviton started as an small project, I didn't have a clear idea of what and how it was going to be. As a consequence it became a big mess, I don't mean the result was bad, but, in terms of maintainability and scalability failed. 

For who don't know, it's a vanilla JavaScript app, no frameworks, it has a little help from a library I made called Puffin but, it's still a mess.

## Changes

Graviton v2 needs to have clear goals so it won't become what it's predecessor became.

### Maintainability

Graviton v1 wasn't using any framework or library to render it's main components. Now, it's using PuffinJS, a reusable and reactive components library. 
That, will allow a better maintainability of the app components.

### Scalability

This is related to maintainability. Cause of  Graviton using PuffinJS there will no issue at adding new features, it's all in components now.
So, changing something on one shouldn't break others.

### Performance

Graviton v1 didn't use any code bundler, so it had to import a lot of JavaScript files in live which had negative effects on the performance. 

Now, Graviton v2 will be using Parcel for bundling all JavaScript and SASS files which results on a faster startup and faster interaction with the app.

## Conclusion

Graviton v2 is going to be faster, prettier and better overall.

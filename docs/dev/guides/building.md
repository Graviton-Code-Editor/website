---
title: 🤠 Building manually
slug: dev/guides/building
description: Building manually

---

Prerequisites:

- [NodeJS (LTS version)](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- **❗ IMPORTANT ❗** -> https://www.npmjs.com/package/node-gyp#installation

## Getting the source

Clone the git repository:

```shell
git clone https://github.com/Graviton-Code-Editor/Graviton-App.git --depth 1
```

**Important**: There are 3 different branches:

- `master`: Daily source (default).
- `stable`: This doesn't mean it's ready to be released as stable build, but it doesn't have as many bugs as master, and is overall more stable.
- `1.3.0`: The old Graviton source code.


## Installing dependencies

Navigate into the folder:

```shell
cd Graviton-App
```

Install the dependencies:

```shell
npm install
```

## Developing (optional)

In case you just want to test it in development mode, run:

### Desktop

```shell
npm start
```

### Browser (experimental)

```shell
npm start:experimental:browser
```

If shows an empty dark screen wait some seconds and if Graviton doesn't load try reloading the window (Ctrl+R).


## Building the installer

You can build Graviton as a browser app or as a desktop app, you probably want the second option.

### Browser

This will generate a static website, which includes the whole Graviton UI, Arctic, Night and Remote plugins by default.

Run:

```shell
npm run build:experimental:browser
```

### Desktop App

This will make a Desktop installer.

Default formats for each platform:

- Windows: 64 bits
- Linux: Deb and AppImage
- MacOS: DMG

Run:

```shell
npm run build
```

You can override the default outputs in the package.json, or just skip to the next section.


#### Building another linux installers

If you want to build a specific linux package for your linux distribution you can run:

```shell
npm run build:your_extension
```

For example, if you are an Arch Linux user, run:

```shell
npm run build:pacman
```

The following is a list of supported packages:

- snap
- pacman
- deb
- apk
- freebsd
- p5p
- rpm
- AppImage

Please keep in mind that any OS can build for ***any*** platform. For example, you can build an AppImage and Deb in a Debian-based distro like Ubuntu.

#### Building out-packed

In case you want to test Graviton in a production build but don't want to create an installer, you can build an outpacked version, this builds faster than an installer.

Run:
```shell
npm run build:outpacked
```

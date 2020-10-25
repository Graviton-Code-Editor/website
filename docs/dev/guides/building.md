---
title: 🤠 Building manually
slug: dev/guides/building
description: Building manually

---

Prerequisites:

- [NodeJS (LTS version)](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## Getting the source

Clone the git repository:

```shell
git clone https://github.com/Graviton-Code-Editor/Graviton-App.git --depth 1
```

**Important**: There are 3 different branches:

- `master`: Daily source (default).
- `stable`: This doesn't mean it's ready to be released as stable build, but it doesn't have as many bugs as master, and is overall more stable.
- `1.3.0`: The old Graviton source code.

> **Note** To switch branch:
* You must be in the previously cloned repository to switch branch. 
    ```shell
    git checkout {branch-name}
    ```
* Replace `{branch-name}` with the branch you want to build.

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

```shell
npm start
```

If it shows an empty dark screen just wait.

## Building the installer

For Windows, Linux(deb, AppImage, rpm) and MacOS:

```shell
npm run build
```

You can override the default platforms from the package.json.

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

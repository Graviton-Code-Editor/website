---
title: RunningConfig
slug: api/runningconfig
description: Runtime Configuration

---

RunningConfig is a Puffin State which holds configuration, data and events needed on runtime. 

## Data

You can access it's data via the `data` prop.

Example:
```javascript
RunningConfig.data.openedWindows
``` 

### focusedTab: `HTMLElement | null`
Refers refers to the focused tab. If there isn't any, it will be null.

### focusedPanel: `HTMLElement`
Refers refers to the focused panel.

### focusedEditor: `{ client, instance } | null`
Refers to the focused editor. If there isn't any, it will be null.
   * `client: string`: is the EditorClient of the editor 
   * `instance`: original editor's instance (such as CodeMirror)

### workspacePath: `string | null`
Refers to the current workspacePath, if there isn't any workspace opened it will be null.

### iconpack: `{ }`
This contains the current selected iconpack's icons.

### isDebug: `boolean`
Indicates if Graviton was launched in debug mode.

### isDev: `boolean`
Indicates if Graviton is in development mode.

### workspaceConfig: `{ name, folders }`
This contains the current workspace configuration, it exists even if there isnt any workspace selected.
   * `name: string | null` -> Refers to the Workspace name, by default it's null.
   * `folders: string[]` -> Contains the current opened folders in Graviton's explorer panel.

### globalCommandPrompt: `[]`
Contains options which will be included in the global prompt, this can be handy for plugins wanting to add their own options to it.

### notifications: `[]`
Contains the current displayed notifications

### editorsRank: `[]`
Contains a rank of editor clients. By default the first is CodeMirror and second the ImageViewer, this means whenever you open a file, first it will ask CodeMirror if it supports the file's format and if not it will then ask the second which in this case is the ImageViewer.

### openedWindows: `number`
Indicates the total number of opened windows, this also includes Dialogs.

### arguments: `string[]`
Contains the arguments Graviton was launched with.

### currentStaticConfig: `{}`
Contains all the settings provided by the current workspace if selected.

### envs: `{ name, prefix, filter }[]`
Contains all the environment filters. 

These are used to understand what kind of project you are working on. 
By default, Graviton includes the NPM env, so whenever you open a NPM project it will display it in the environments side panel.

   * `name: string` -> Indicates the Env name
   * `prefix: string` -> Command prefix used for scripts
   * `filter: function` -> Function which returns a object with the environment data or false if it didn't identify the environment.

### projectServices: `{ name, description, onExecuted }[]`
Contains the project services.
   * `name: string`: -> Name 
   * `descripion: -> string`: Short description 
   * `onExecuted: -> function`: Function executed when the project service is used
   
## Events

Usage:

```javascript
RunningConfig.on('eventName', () => {
	//Event action
})
```

List of useful events:
* aTabHasBeenSaved
* aTabHasBeenFocused
* aTabHasBeenUnfocused
* aTabHasBeenClosed
* aFileHasBeenCreated
* aFolderHasBeenCreated
* aFileHasBeenRemoved
* aFolderHasBeenRemoved
* gitStatusUpdated

There are some events not listed here since they are used in Graviton internally.

There are also commands, which are events you can emit to do certain things:
* command.saveCurrentFile
* command.newPanel
* command.closeCurrentTab
* command.closeCurrentPanel
* command.openCommandPrompt

And some misc actions:
* registerLanguageServer

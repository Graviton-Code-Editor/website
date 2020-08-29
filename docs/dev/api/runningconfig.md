---
title: 🏃‍♂️ RunningConfig
slug: dev/api/runningconfig
description: Runtime Configuration

---

RunningConfig is a Puffin State which holds configuration, data and events needed on runtime. 

**Contents**:
* [Data](#data)
* [Events](#events)

<div id="data"/>

## Data

You can access it's data via the `data` prop.

Example:
```javascript
RunningConfig.data.openedWindows
``` 

It's data interface:
```ts
interface RunningConfigData{
	focusedTab: HTMLElement | null,
	focusedPanel: HTMLElement,
	focusedEditor: { client, instance } | null,
	workspacePath: string | null,
	iconpack: {},
	isDebug: boolean,
	isDev: boolean,
	workspaceConfig: {
		name: string,
		folders: string[],
	},
	globalCommandPrompt: Array<{ label: string, action: () => void }>,
	notifications: Array<{ title: string, content: string, element: HTMLElement }>,
	editorsRank: EditorClients[],
	openedWindows: number,
	arguments: string[],
	currentStaticConfig: {},
	envs: [],
	projectServices: [],
	languageServers: [],
}
```

### focusedTab: <div class="type"> HTMLElement | null </div>
Refers refers to the focused tab. If there isn't any, it will be null.

### focusedPanel: <div class="type"> HTMLElement </div>
Refers refers to the focused panel.

### focusedEditor: <div class="type"> { client, instance } | null </div>
Refers to the focused editor. If there isn't any, it will be null.
   * `client: string`: is the EditorClient of the editor 
   * `instance`: original editor's instance (such as CodeMirror)

### workspacePath: <div class="type"> string | null </div>
Refers to the current workspacePath, if there isn't any workspace opened it will be null.

### iconpack: <div class="type"> {} </div>
This contains the current selected iconpack's icons.

### isDebug: <div class="type"> boolean </div>
Indicates if Graviton was launched in debug mode.

### isDev: <div class="type"> boolean </div>
Indicates if Graviton is in development mode.

### workspaceConfig: <div class="type"> { name, folders } </div>
This contains the current workspace configuration, it exists even if there isnt any workspace selected.
   * `name: string | null` -> Refers to the Workspace name, by default it's null.
   * `folders: string[]` -> Contains the current opened folders in Graviton's explorer panel.

### globalCommandPrompt: <div class="type"> [] </div>
Contains options which will be included in the global prompt, this can be handy for plugins wanting to add their own options to it.

### notifications: <div class="type"> [] </div>
Contains the current displayed notifications

### editorsRank: <div class="type"> [] </div>
Contains a rank of editor clients. By default the first is CodeMirror and second the ImageViewer, this means whenever you open a file, first it will ask CodeMirror if it supports the file's format and if not it will then ask the second which in this case is the ImageViewer.

### openedWindows: <div class="type"> number </div>
Indicates the total number of opened windows, this also includes Dialogs.

### arguments: <div class="type"> string[] </div>
Contains the arguments Graviton was launched with.

### currentStaticConfig: <div class="type"> {} </div>
Contains all the settings provided by the current workspace if selected.

### envs: <div class="type"> { name, prefix, filter }[] </div>
Contains all the environment filters. 

These are used to understand what kind of project you are working on. 
By default, Graviton includes the NPM env, so whenever you open a NPM project it will display it in the environments side panel.

   * `name: string` -> Indicates the Env name
   * `prefix: string` -> Command prefix used for scripts
   * `filter: function` -> Function which returns a object with the environment data or false if it didn't identify the environment.

### projectServices: <div class="type">{ name, description, onExecuted }[]</div>
Contains the project services.
   * `name: string`: -> Name 
   * `descripion: -> string`: Short description 
   * `onExecuted: -> function`: Function executed when the project service is used
   
<div id="events"/>

## Events

Usage:

```javascript
RunningConfig.on('eventName', () => {
	//Event action
})
```

There are some events not listed here since they are used in Graviton internally.

### Tabs

Events related to tabs:
* aTabHasBeenCreated
* aTabHasBeenSaved
* aTabHasBeenFocused
* aTabHasBeenUnfocused
* aTabHasBeenClosed

Arguments interface:
```ts
interface TabEventArgs {
	tabElement: HTMLElement,
	directory: string,
	client: EditorClient,
	instance: any,
	parentFolder: string,
	projectPath: string,
	isEditor: boolean
}
```

Since `aTabHasBeenFocused` is also emitted when the tab is created it has an extra property, so it's arguments interface is:
```ts
interface TabEventArgs {
	tabElement: HTMLElement,
	directory: string,
	client: EditorClient,
	instance: any,
	parentFolder: string,
	projectPath: string,
	isEditor: boolean,
	justCreated: boolean
}
```

### Filesystem

Events related to the Filesystem:

* aFileHasBeenCreated
* aFileHasBeenRemoved

Arguments interface:
```ts
interface FileCreatedArgs {
	parentFolder: string,
	filePath: string
}
```

* aFolderHasBeenCreated
* aFolderHasBeenRemoved

Arguments interface:
```ts
interface FileCreatedArgs {
	parentFolder: string,
	folderPath: string
}
```

* gitStatusUpdated
Arguments interface:
```ts
interface FileCreatedArgs {
	gitChanges: any,
	parentFolder: string,
	branch: string,
	anyChanges: boolean
}
```

> Note: These will only be triggered if the files watcher is enabled.

### Commands

These are events, you can trigger to do certain things.

* command.saveCurrentFile
* command.newPanel
* command.closeCurrentTab
* command.closeCurrentPanel
* command.openCommandPrompt


### Misc

Misc events:
* registerLanguageServer

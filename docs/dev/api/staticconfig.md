---
title: StaticConfig
slug: dev/api/staticconfig
description: Static Configuration

---



StaticConfig is a Puffin State which holds the user's configuration and some events.

## Data

The data can be accessed via the `data` prop.

Example:
```javascript
StaticConfig.data.appTheme
```

The data interface of StaticConfig:

```ts
interface StaticConfigData {
	appTheme: string,
	appIconpack: string,
	appLanguage: string,
	editorFontSize: string,
	appProjectsLog: [],
	appConfigPath: string,
	appWorkspacesLog: [],
	appZoom: number,
	editorFSWatcher: boolean,
	editorAutocomplete: boolean,
	editorIndentation: string,
	editorTabSize: number,
	editorFontFamily: string,
	editorWrapLines: boolean,
	appPlatform: string,
	appShortcuts: {
		[CommandName: { 
			combos: string[] 
		}]
	},
	miscEnableLiveUpdateInManualConfig: boolean,
	appBlurEffect: number,
	appCheckUpdatesInStartup: boolean,
	appEnableSidebar: boolean,
	appEnableSidepanel: boolean,
	appEnableExplorerItemsAnimations: boolean,
	appOpenWelcomeInStartup: boolean,
	editorsClients: Array<{ extension, editor, regex }>,
	editorExcludedDirs: string[],
}
```

### appTheme: `string`
Indicates the selected theme. Defaults to `Night`.

### appIconpack: `string`
Indicates the selected iconpack theme. Defaults to `Graviton`.

### appLanguage: `string`
Indicates the selected language name. Defaults to `English`.

### appProjectsLog: `[]`
Contains the projects log.

### appConfigPath: `string`
Indicates the `.graviton2`-folder path.

### appWorkspacesLog: `[]`
Contans the workspaces log.

### appZoom: `number`
Indicates the zoom level of the GUI. Defaults to `0`

### appPlatform: `string`
Indicates the app platform. Defaults to `auto`.

### appShortcuts: `{}`
Contains configured shortcuts.

### appBlurEffect: `number`
Indicates the blur intensity.

### appCheckUpdatesInStartup: `boolean`
Enable or disable checking for updates when Graviton is opened. Defaults to `true`.

### appEnableSidebar: `boolean`
Enable or disable the sidebar. Defaults to `true`.

### appEnableSidepanel: `boolean`
Enable or disable the sidepanel. Defaults to `true`.

### appEnableExplorerItemsAnimations: `boolean`
Enable or disable on-hover and on-click animations in Explore panel items.

### appOpenWelcomeInStartup: `boolean`
Enable or disable the welcome window when Graviton is opened. Defaults to `true`.

### editorFSWatcher: `boolean`
Enable or disable File Watcher. Defaults to `true`.

### editorAutocompletion: `boolean`
Enable or disable autocompletion. Default to `true`.

### editorIdentation: `string`
Indicates whether to use `tab` or `space` indentation.

### editorTabSize: `number`
Indicates the number of spaces a tab is equal to.

### editorFontFamily: `string`
Indicates the font family used in the editor. Defaults to `JetBrainsMono`.

### editorWrapLines: `boolean`
Indicates whether to wrap lines in the editor. Defaults to `false`.

### editorClients: `Array<{ extension, editor, regex }>`
User's preferences for editor clients
  * `extension: string`: -> File extension to match.
  * `editor: string`: -> Name of the editor to use.
  * `regex: boolean`: -> Indicates if `extension`-property is a regex.

### editorExcludedDirs: `string[]`
Excluded directories which won't be watched by the File Watcher.
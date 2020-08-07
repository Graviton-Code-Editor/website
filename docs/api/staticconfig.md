---
title: StaticConfig
slug: api/staticconfig
description: Static Configuration

---



StaticConfig is a Puffin State which holds the user's configuration and some events.

## Data

You can access it's data via the `data` prop.

Example:
```javascript
StaticConfig.data.appTheme
```

It's data interface:

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
Indicates the selected theme. Default to `Night`

### appIconpack: `string`
Indicates the selected iconpack theme. Default to `Graviton`

### appLanguage: `string`
Indicates the selected language name. Default to `English`

### appProjectsLog: `[]`
Contains the projects log.

### appConfigPath: `string`
Indicates the `.graviton2` path.

### appWorkspacesLog: `[]`
Contans the workspaces log.

### appZoom: `number`
Indicates the zoom level of the GUI. Default to `0`

### appPlatform: `string`
Indicates the app platform. Default to `auto`.

### appShortcuts: `{}`
Configured shortcuts.

### appBlurEffect: `number`
Indicates the blur intensity.

### appCheckUpdatesInStartup: `boolean`
Enable or disable checking if there is a new update every time you open Graviton.

Default to `true`.

### appEnableSidebar: `boolean`
Enable or disable the sidebar. Default to `true`

### appEnableSidepanel: `boolean`
Enable or disable the sidepanel. Default to `true`

### appEnableExplorerItemsAnimations: `boolean`
Enable or disable the hovering and clickig animations in Explore panel items.

### appOpenWelcomeInStartup: `boolean`
Open or not the welcome window every time you open Graviton.

Default to `true`

### editorFSWatcher: `boolean`
Enable or disable Files Watcher.

Default to `true`

### editorAutocompletion: `boolean`
Enable or disable autocompletion.

Default to `true`

### editorIdentation: `string`
Indicates to use `tab` or `space`

### editorTabSize: `number`
Indicates the tab's size.

### editorFontFamily: `string`
Font family used for the editor. Default to `JetBrainsMono`.

### editorWrapLines: `boolean`
Wrap or no the lines in the editor. Defaul to `false`

### editorClients: `Array<{ extension, editor, regex }>`
User's preferences for editor clients
  * `extension: string`: -> File's extension to match
  * `editor: string`: -> EditorClient's name to use
  * `regex: boolean`: -> Indicates if `extension` is a regex

### editorExcludedDirs: `string[]`
Excluded directories which won't be watched by the Files Watcher.
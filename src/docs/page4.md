## API

### graviton (object)

#### getCurrentTheme()

Returns the name of the current applied theme.

Example: 

```
graviton.getCurrentTheme();
//Artic
```

#### setThemeByName()

Set's the theme by to the passed name

Example: 

```
graviton.setThemeByName("Artic");
```

#### getSelectedText()

Returns the current selected text as string, if there is no selected it will return <null>

#### getCurrentFile()

Returns an object which contains info about the current filepath, it there is any file opened, it will return an empty string.

#### getCurrentEditor()

Returns an object of the current editor focused, if there is editor focused it will return "empty"



| Properties| Description |
| --------- | ---- |
| id   | the HTML element ID |
| editor 		| The Codemirror if has |
| path     | the file's path if is a file |
| screen | the screen's object where the editor is in |

#### getCurrentDirectory()

Returns the absolute path of the current opened folder. if there isn't a folder opened, then it will return "not_selected".

#### currentOS()

Returns an object with info about the host's operative system.

| Properties| Description |
| --------- | ---- |
| codename   | The short name|
| name 		| The full name|

| Codename| Name |
| --------- | ---- |
| win32   | Windows |
| darwin 		| MacOS |
| linux | Linux |

Example:
```
graviton.currentOS()
/* Returns:
{
codename:darwin,
name:"MacOS"
}
or

*/
```

#### openDevTools()

Toggles the Developer tools.

#### editorMode()

Returns "zen" if Zen mode is ON, or "normal" if it's normal.

#### throwError()

A short way to throw a notification error.

#### addContextMenu()

Add buttons to the default context menu by passing an object.

Example:
```
graviton.addContextMenu({
	"Button1":"console.log('Hello Gravitoners!')"
})

```


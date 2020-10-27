---
title: Explorer Provider
slug: dev/api/explorer_provider
description: Explorer Provider

---

An Explorer Provider is a tiny layer between Graviton and the filesystem. 
By default, Graviton ships with the [Local ExplorerProvider](https://github.com/Graviton-Code-Editor/Graviton-App/blob/master/src/interface/defaults/local.explorer.ts) which allows you to access, read, and modify, your local filesystem.
Plugins can make use of custom ExplorerProviders to access non-local filesystems, for example remote filesystems.

ExplorerProvider's full interface:
```ts
interface ExplorerProvider {
	name: string,
	decorator: {
		text: string
	},
	listDir: (dirPath: string) => Promise<Array<{name: string, isFolder: boolean}>>,
	readFile: (filePath: string) => Promise<string>,
	writeFile: (filePath: string, fileContent: string) => Promise,
	renameDir: (dirPath: string, newDirPath: string) => Promise,
	mkdir: (dirPath: string) => Promise,
	exists: (dir: string) => Promise<Boolean>,
	isGitRepo: (dirPath: string) => Promise<boolean>,
	getGitStatus: (dirPath: string) => Promise<any>
}
```

Basic example of using a custom ExplorerProvider with a fake filesystem.
```ts
function entry({ FilesExplorer }){
	new FilesExplorer('/home/user/folder_1', '/home/user/folder_1', document.getElementById('explorer_panel'), 0, false, null, {
		provider: {
			decorator:{
				text: `Hello World`
			},
			listDir: async function(dirPath){
				return new Promise((res) => {
					// Return items inside `dirPath`
					res([
						{
							name: 'file 1',
							isFolder: false
						},
						{
							name: 'folder 1',
							isFolder: true
						}
					])
				})
			},
			isGitRepo(){
				return new Promise( (res) => {
					//Return whether it is a git repository
					res(false)
				})
			},
			readFile: function (filePath) {
				return new Promise( async (res) => {
					// Return the content of `filePath`
					res('Weeew')
				})
			}
		}
	})
}

modules.export = {
	entry
}
```

This example implements some basic operations:
* List directories
* Read files
* Detect if the project folder is a git repository
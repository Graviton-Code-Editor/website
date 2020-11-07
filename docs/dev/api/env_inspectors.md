---
title: 🎹 Environment Inspectors
slug: dev/api/env_inspectors
description: Environment Inspectors

---

Environment inspectors (or Project Inspectors) allow you to inspect information about your project more easily, and execute scripts.

Concepts:
* Inspectors are filters, if they detect something "interesting" in the folder, they will return information about the folder. If not, the next Inspector's filter will be executed.
* The filters are executed every time a folder is opened.
* The Inspectors are shown in the Environment sidepanel

Example:

Suppose a folder has a file `interesting.json`, with some JSON content.
A filter for this file would look like the following:

```ts
RunningConfig.data.envs.push({
	name: 'MyInspector',
	filter(OpenedFolderPath){
		return new Promise(async (resolve) => {
			
			const interestingFile = path.join(OpenedFolderPath, 'interesting.json')
			
			if(await fs.exists(interestingFile)){ //The folder has the 'interesting.json' file
				
				const interestingContent = window.require(interestingFile)
				resolve(interestingContent)
				
			}else{ //The folder doesn't have the 'interesting.json' file
				resolve(false)
			}
		})
	}
})
```
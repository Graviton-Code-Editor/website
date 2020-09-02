---
title: 🎹 Environment Inspectors
slug: dev/api/env_inspectors
description: Environment Inspectors

---

Environment inspectors (aka Project Inspectors) allows you to inspect the information about your project easier, and also execute scripts.

Concepts:
* Inspectors are filters, if they detect something "interesting" in the folder, it will return the information about the folder, if not, the next Inspector's filter will be executed.
* The filters are executed every time a folder is opened.
* They are shown in the Environment sidepanel

Example:

Let's suppose the folder have a file `interesting.json`, with some JSON content:

```ts
RunningConfig.data.envs.push({
	name: 'MyInspector',
	filter(OpenedFolderPath){
		return new Promise(async (resolve) => {
			
			const interestingFile = path.join(OpenedFolderPath, 'interesting.json')
			
			if(await fs.exists(interestingFile)){ //The folder have the 'interesting.json' file
				
				const interestingContent = window.require(interestingFile)
				resolve(interestingContent)
				
			}else{ //The folder doesn't have the 'interesting.json' file
				resolve(false)
			}
		})
	}
})
```
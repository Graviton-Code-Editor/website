---
title: Dialog
slug: api/dialog
description: Dialog

---

Dialog allows you to create small sized windows with a title, content and buttons.

Options: 

```ts
interface DialogOptions {
	title: string,
	content?: string,
	component?: PuffinComponent,
	buttons: Array<{ 
		label: string, 
		action: () => void 
	}>
}
```

Example:
```js
const dialogExample = new Dialog({
	title: 'The title',
	content: 'The content',
	buttons:[
		{
			label:'A button',
			action(){
				console.log('The button was clicked')
			}
		}
	]
})

dialogExample.launch()
```

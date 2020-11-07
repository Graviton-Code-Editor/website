---
title: 👓 Dialog
slug: dev/api/dialog
description: Dialog

---

Dialogs allow you to create small sized windows with a title, content and buttons.

Options interface: 

```ts
interface DialogOptions {
	title: string,
	content?: string,
	component?: PuffinComponent,
	buttons?: Array<{ 
		label: string, 
		action: () => void 
	}>
}
```

Dialog instance interface :
```ts
interface DialogInstance {
	launch: () => void
	close: () => void
	on: (string, any) => void
}
```

A simple Dialog with a title, content and a button:
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

An example of passing a component instead of plain content without a button.
```js
function entry({ Dialog, puffin }){
	const dialogExample = new Dialog({
		title: 'The title',
		component: () => puffin.element`<p>Hello World</p>`
	})

	dialogExample.launch()
}
```
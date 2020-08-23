---
title: 👓 Dialog
slug: dev/api/dialog
description: Dialog

---

Dialog allows you to create small sized windows with a title, content and buttons.

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

A simple Dialog with a Title, Content and a button:
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

An example passing a component instead of a plain content and with any button.
```js
const dialogExample = new Dialog({
	title: 'The title',
	component: () => element`<p>Hello World</p>`
})

dialogExample.launch()
```
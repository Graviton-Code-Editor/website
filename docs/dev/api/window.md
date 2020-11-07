---
title: 🎴 Window
slug: dev/api/window
description: Window

---

Window options interface: 

```ts
interface WindowOptions {
	title?: string
	component: object
	minWidth?: string
	minHeight?: string
	height?: string
	width?: string
	id?: string
}
```

Window instance interface :
```ts
interface WindowInstance {
	launch: () => void
	close: () => void
	on: (eventName: string, eventData: any) => PuffinEventInstance
}
```

Example:
```js
function entry({ Windowm, puffin }){
	const windowExample = new Window({
		component(){
			return puffin.element`<button>Hello World</button>`
		}
	})

	windowExample.launch()
}
```
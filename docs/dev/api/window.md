---
title: 🎴 Window
slug: dev/api/window
description: Window

---

Options interface: 

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
function entry({ Window }){
	const windowExample = new Window({
		component(){
			return element`<button>Hello World</button>`
		}
	})

	windowExample.launch()
}
```
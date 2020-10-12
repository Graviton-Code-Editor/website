---
title: Notification
slug: dev/api/notification
description: Notification

---

The Notification class allows you send notifications inside Graviton.

Options interface: 

```ts
interface NotificationOptions {
	title: string,
	content?: string,
	lifeTime?: number | Infinity,
	buttons?: Array<{ 
		label: string, 
		action: () => void 
	}>
}
```

Notification instance interface :
```ts
interface NotificationInstance {
	remove: () => void
}
```


Example:
```ts
const notificationExample = new Notification({
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

notificationExample.remove() //This removes the notification
```
---
title: 🔍 Explorer
slug: dev/api/explorer
description: Explorer

---

Explorer is a tree-view component.

The constructor returns a Puffin Component, which can be rendered wherever needed.

Explorer item interface: 

```ts
interface ExplorerItemOptions { 
	label: string, 
	items?: ExplorerItemOptions[], 
	mounted?: (itemHooks: ItemHooks) => void, 
	icon?: string, 
	iconComp?: PuffinComponent, 
	action?: (e: MouseEvent, itemHooks: ItemHooks) => void, 
	contextAction?: (e: MouseEvent, itemHooks: ItemHooks) => void, , 
	decorator?: {
		label?: string,
		background?: string
	} 
}

interface ItemHooks {
	setIcon: (icon: string) => void,
	setItems: (ExplorerItems: ExplorerItemOptions[]) => void,
	setDecorator: (decorator: { label?: string, background?: string}) => void
}
```

Example:

```ts
function entry({ Explorer }){
	const myExplorerComponent = new Explorer({
		items: [
			{
				label: 'Item 1',
				icon:'graviton_icon',
				items: [
					{
						label: 'Subitem 1'
					}
				],
				decorator:{
					label: 'wow',
					background: 'rgb(100, 100, 100)'
				}
			},
			{
				label: 'Item 2',
				action(e, itemHooks){
					//Left click action
				},
				contextAction(e, itemHooks){
					//Right click action
				},
				iconComp(){
					return element`<svg> ... </svg>`
				},
				mounted(itemHooks){
					//Executed when the item is shown in the explorer
				}
			}
		]
	})
}
```
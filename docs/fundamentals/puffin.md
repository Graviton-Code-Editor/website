---
title: PuffinJS
slug: fundamentals/puffin
description: What's puffin?

---

**Puffin**, is a library used to create HTML components (element), reactive objects with event emitters (state),  and CSS in JS encapsulated stylesheets (style).

Graviton makes a heavy usage of it. For example, objects like `RunningConfig` or `StaticConfig` are Puffin States, which means, they hold reactive data and events.

### Component

```js
function clickedMe(){
	console.log('You clicked me')
}

const exampleComp = puffin.element`
	<div :click="${clickedMe}">
		Hello World
	</div>
`

puffin.render(exampleComp, document.body)
```

### State

Interface:

```ts
interface PuffinState {
	keyChanged: (keyName: string, eventAction: () => void) => void,
	changed: (eventAction: () => void) => void,
	on: (eventName: string, eventAction: () => void ) => void,
	emit: (eventName: string, eventParams: () => void) => void,
	data: any,
	triggerChange: () => void
}
```

Example:
```js
const exampleState = new puffin.state({
	someData: false,
	anotherData:{
		nice: 'yes'
	}
})

exampleState.onChanged( newData =>{
	//Any data has been changed
	console.log(`New data -> ${newData}`)
})

exampleState.keyChanged('someData', newValue =>{
	//Property someData has changed
	console.log(`New value for someData -> ${newValue}`)
})

//Modify or read the stored data
exampleState.data.someData = true

const whateverListener = exampleState.on('whatever', params  =>{
	//Event 'whatever' has been emitted
	console.log(`Event "whatever" says -> ${params}`)
})

//Emit event 'whatever' with value 'Hello World!'
exampleState.emit('whatever','Hello World!')

//Cancel listener for 'whatever'
whateverListener.cancel()
```

**Note**:

Sub properties are not reactive, example:

```js

const exampleState = new puffin.state({
	anotherData:{
		nice: 'yes'
	}
})

//This won't trigger events like 'onChanged' or 'keyChanged'
exampleState.data.anotherData.nice = 'absolutely'

//So, you need to call 'triggerChange' to force it
exampleState.triggerChange()

exampleState.onChanged( newData =>{
	//Any data has been changed
	console.log(`New data -> ${newData}`)
})

```

### style
You can encapsulate CSS StyleSheets in random-generated classes which you can use in your components.

```js
const exampleStyle = puffin.style`
	& {
		background: gray;
	}
`

const exampleComp = puffin.element`<div class="${myStyle}"/>`
```
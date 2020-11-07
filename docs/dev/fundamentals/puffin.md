---
title: 🐧 Puffin
slug: dev/fundamentals/puffin
description: What's puffin?

---

**Puffin**, is a frontend-framework for creating HTML components, reactive objects, event emitters, and CSS-in-JS stylesheets.

Graviton makes a heavy use of it. For example, objects like `RunningConfig` or `StaticConfig` are Puffin States, which means, they hold reactive data and events.

## Component

Components are used to create HTML-like components which can be reused as-needed.

Here is an example of creating a `<div>` with `Hello World` as text and a click event listener. It is then rendered into document.body.

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

**Note**: Rendering a component into the body is not the intended usage in Graviton, this is just an example of how it works.

## State

Puffin States are reactive and event emitter objects. It allows you to store and watch for data changes, and also create custom events and listen for them.

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

Sub properties are not reactive.
Example:

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

## Style
You can encapsulate CSS StyleSheets in random-generated classes which can then be used in your components.

```js
const exampleStyle = puffin.style`
	& {
		background: gray;
	}
`

const exampleComp = puffin.element`<div class="${myStyle}"/>`
```

**Note**: You can also use other alternatives like Emotion using the CSS prop.
## API 2

### Creating elements

#### Plugin

Initializing the plugin:

```
const myPluginInstace = new Plugin({
  name: "myPlugin"
})
```

#### Dialogs

```
new g_dialog({
  id: "my_dialog",
  title: "Hello user",
  content: "This is my dialog",
  buttons: {
    "Cool!": "console.log("cool!"); closeDialog(this);",
    "close": "closeDialog(this);"
  }
})
```

#### Notifications

Create a notifcation by passing the title and content as 2 different arguments:

```
new Notification('This is a title!', 'And this a content 🚀');
```

#### Dropmenus

Initializing a dropmenu:

```
const myDropMenu = new dropMenu({
	id:"my_dropmenu"
});
```

Defining a simple list:

```
myDropMenu.setList({
  "button": "Button",
  "list":{
  	"Click me!":"console.log('You clicked me!')"
  }
})
```

Defining a custom list which you can use to display HTML content:

```
myDropMenu.setList({
  "button": "Button",
  "custom":"<p>Hello world</p>"
})
```

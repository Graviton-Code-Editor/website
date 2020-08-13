---
title: 🍱 Workspaces
slug: user_guide/workspaces
description: Workspaces

---


Workspaces are a way of grouping projects and settings together in a organized way.

The configuration for each workspace is written in files you can save wherever you want. By default Graviton saves the workspaces in files named 'gv.workspace.json', but you can put the name you want.

## Opening workspaces
You can open your workspaces from the Welcome window > "Recent workspaces".

Or directly in menu "File" > "Workspaces" > "Open workspaces".


## Creating workspaces
There are various ways of creating a workspace.

### Method 1 · From Graviton

1. Open a folder ( or more )
2. Click on menu "File" > "Workspaces" > "Save workspace" and save it wherever you want.
3. Since it's the first time we create it, Graviton will ask us to write a name for it.

Done!

### Method 2 · Manually
Create a file (name it like you wish) wherever you want in JSON format.

And write this inside:

```json
{
	"name":"Work's Workspace",
	"folders":[
		{
			"name":"Work's project",
			"path":"{absolute_project_path}"
		}
	]
}
```

Replace `{absolute_project_path}` with your desired project's path. Feel free to change the names too.

You have now manually created a Graviton's workspace! 

To use it, you must load it in Graviton, click in menu "File" > "Workspaces" > "Load from file", and select your workspace's file. It will now appear in "Recents Workspaces".


## Add custom settings
Workspaces now only allows you to group folders, but also to apply custom settings.

Let's suppose we have a workspace like:

```json
{
	"name":"Work's Workspace",
	"folders":[
		{
			"name":"Earth protection",
			"path":"/home/superman/work/earth"
		}
	]
}
```

We would like to have the Night theme when we open it, let's modify it:
```json
{
	"name":"Work's Workspace",
	"folders":[
		{
			"name":"Earth protection",
			"path":"/home/superman/work/earth"
		}
	],
	"settings":{
		"appTheme":"Night"
	}
}
```

We added the property settings which allows us to specify what settings we want to tweak.
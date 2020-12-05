---
title: 🍱 Workspaces
slug: user_guide/workspaces
description: Workspaces

---


Workspaces are a way of grouping projects and settings together in a organized way.

The configuration for each workspace is written in files you can save wherever you want. By default Graviton saves the workspaces in files named 'gv.workspace.json', but you can name them whatever you want.

## Opening workspaces
You can see your saved workspaces in `"File" > "Workspaces" > "Open workspaces"`.


## Creating workspaces
There are two methods to create a workspace.

### Method 1 · From Graviton

1. Open a folder (or more)
2. Click on menu `"File" > "Workspaces" > "Save workspace"` and save it wherever you want.
3. Because it was just created, Graviton will ask for a name for the workspace file.
4. Done!

### Method 2 · Manually
1. Create a JSON-file (name it whatever you want) wherever you want.
2. And copy the following to the file:

```json
{
	"name":"{Workspace Name}",
	"folders":[
		{
			"name":"{Folder Name}",
			"path":"{absolute_project_path}"
		}
	]
}
```

3. Replace `{absolute_project_path}` with your desired project's path, `{Workspace Name}` with your desired workspace name, and `{Folder Name}` with the name of the folder you want to be included in the workspace.

You have now manually created a Graviton workspace! 

In order to use it click in menu `"File" > "Workspaces" > "Load from file"`, and select your workspace's file.
It will now appear in your workspace log.


## Add custom settings
Workspaces not only allow you to group folders, but also to set custom settings.

Suppose the workspace file looks like the following:

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

Suppose we would like to have the Night theme when we open it. To do this add the following property:
```json
{
	"settings":{
		"appTheme":"Night"
	}
}
```
You should now have the following:
```json
{
	"name": "Work's Workspace",
	"folders": [
		{
			"name": "Earth protection",
			"path": "/home/superman/work/earth"
		}
	],
	"settings": {
		"appTheme": "Night"
	}
}
```

The settings property allows you to tweak the settings for a workspace.
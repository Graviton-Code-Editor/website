## Installing and removing plugins and themes 

As you know, .graviton contains Graviton's data and config.
There we have the folder plugins and themes.

### Plugins
Let's supose we have a plugin installed, the plugins directory would look like:


-plugins
  |-- installedPlugin
  	|-- package.json
  	|-- main.js

If we want to remove it, we just have to remove that folder, thats easy! 
In case we want to install one, we just have to move the plugin's folder inside the plugins folder.

Reboot Graviton to apply changes.

### Themes
By default Graviton has two themes installed (dark & light), so the themes directory looks like:

-themes
  |-- dark.json
  |-- light.json
  
To remove a theme just delete the file, to install, just move the JSON file inside the folder.

Reboot Graviton to apply changes.
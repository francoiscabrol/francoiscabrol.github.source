---
layout: post
title:  Start with Sublime
tags: [sublime]
--- 

I use Sublime Text since few months ago to do some web development and I'd like to share useful tips from my little experience.

## List of plugins

If you want to be confortable with Sublime, you have to learn quickly the most useful shortcuts and then understand how to install plugins. To do this, there is already a lot of ressources on the web as [this unofficial documentation](http://sublime-text-unofficial-documentation.readthedocs.org/en/latest/reference/keyboard_shortcuts_osx.html) that is very complete.

The list of plug-ins I use:

- "Package Control" is a package manager. All others plugins can be find, install or desinstall quickly with this tool.

- "CursorRuler" add a rule on the cursor side.

- "GitGutter" allows to see local modification before committing in the current file and to navigate through with a shortcut.

- "GoToLastEdit" allows to navigate to last cursor positions.

- "MarkdownEditing" improve the markdown editing experience.

## To add in the preference file

If you need, you can add in the file preferences.sublime-settings these lines:

       "draw_white_space": "all", // Show tabulations
        "trim_trailing_white_space_on_save": true, // Delete white space on saving
      
       "ignored_packages": [ ], // allows to use Vim command lines
        "vintage_start_in_command_mode": true // start sublime in the Vim command mode


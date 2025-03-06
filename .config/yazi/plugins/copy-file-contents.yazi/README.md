# Copy-file-contents.yazi

A simple plugin to copy file contents just from Yazi without going into editor.

## Features

- Copy one or more file contents to clipboard.
- Set custom separator for copied contents.
- It utilises yazi's `ya.clipboard()` to copy contents to clipboard, taking care of binary files too.

## Preview

[copy-file-contents.yazi_preview.webm](https://github.com/user-attachments/assets/b7050697-1766-410a-ae5e-8519a62e650b)

## Installation

You can install this plugin by running the following command

```bash
ya pack -a AnirudhG07/plugins-yazi:copy-file-contents
```

You can also manually install it by copying the [`init.lua`](https://github.com/AnirudhG07/plugins-yazi/tree/main/copy-file-contents/init.lua) file to your `~/.config/yazi/plugins` directory.

## Usages

Add the below keybinding to your `~/.config/yazi/keymaps.toml` file.

```toml
[[manager.prepend_keymap]]
on = "<A-y>"
run = ["plugin copy-file-contents"]
desc = "Copy contents of file"
```

Add the below to your `~/.config/yazi/init.lua` file to set custom options for the plugin.

```lua
require("copy-file-contents"):setup({
	append_char = "\n",
	notification = true,
})
```

## Options

1. `append_char`: Set the character to append at the end of each copied file content. Default is `"\n"`.
2. `notification`: Set to `true/false` to enable/disable notification after copying the contents. Default is `true`.

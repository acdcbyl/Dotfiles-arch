#!/bin/bash

# 遍历目录下的所有 userChrome.css 文件并替换颜色方案
find "$1" -name "userChrome.css" -type f -print0 | xargs -0 sed -i 's/prefers-color-scheme: dark/prefers-color-scheme: light/g'

# 遍历目录下的所有 userContent.css 文件并替换颜色方案
find "$1" -name "userContent.css" -type f -print0 | xargs -0 sed -i 's/prefers-color-scheme: dark/prefers-color-scheme: light/g'

post_command = yad --title="主题选择" --text="🌈 选择主题模式" --button="Light 主题:0" --button="Dark 主题:1" && (matugen image "$wallpaper" -m "light" && gsettings set org.gnome.desktop.interface color-scheme prefer-light) || (matugen image "$wallpaper" && gsettings set org.gnome.desktop.interface color-scheme prefer-dark)

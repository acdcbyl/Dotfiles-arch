#!/bin/bash

# 遍历目录下的所有 userChrome.css 文件并替换颜色方案
find "$1" -name "userChrome.css" -type f -print0 | xargs -0 sed -i 's/prefers-color-scheme: dark/prefers-color-scheme: light/g'

# 遍历目录下的所有 userContent.css 文件并替换颜色方案
find "$1" -name "userContent.css" -type f -print0 | xargs -0 sed -i 's/prefers-color-scheme: dark/prefers-color-scheme: light/g'

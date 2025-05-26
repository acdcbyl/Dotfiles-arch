#!/bin/sh
# 获取壁纸路径和主题模式
wallpaper="$1"
mode="$2"

# 根据指定的模式参数设置主题
if [ "$mode" = "light" ]; then
  # 应用亮色主题
  matugen image "$wallpaper" -m light
  gsettings set org.gnome.desktop.interface color-scheme prefer-light
  theme="Light Theme"
  hyprctl reload
  hyprshade on vibrance
elif [ "$mode" = "dark" ]; then
  # 应用暗色主题
  matugen image "$wallpaper"
  gsettings set org.gnome.desktop.interface color-scheme prefer-dark
  theme="Dark Theme"
  hyprctl reload
  hyprshade on vibrance
else
  # 未指定有效模式，显示用法信息
  echo "Usage: $0 <wallpaper_path> <mode>"
  echo "Mode options: light, dark"
  exit 1
fi

# 发送桌面通知
# notify-send "主题已切换" "当前主题模式: $theme" -a change-color -h "string:image-path:$HOME/.config/waypaper/scripts/icon.svg"

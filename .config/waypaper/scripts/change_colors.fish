#!/usr/bin/fish

# 获取壁纸路径
set wallpaper $argv[1]

# 使用 imagemagick 检测图片的平均亮度
set brightness (magick "$wallpaper" -colorspace Gray -format "%[fx:mean]" info:)

# 设置亮度阈值，根据实际情况调整
set threshold 0.7

# 根据亮度选择主题
if test (math "$brightness - $threshold") -gt 0
    # 图片较亮，应用亮色主题
    matugen image "$wallpaper" -m light
    gsettings set org.gnome.desktop.interface color-scheme prefer-light
    set theme "Light Theme"
else
    # 图片较暗，应用暗色主题
    matugen image "$wallpaper"
    gsettings set org.gnome.desktop.interface color-scheme prefer-dark
    set theme "Dark Theme"
end

# 发送桌面通知
notify-send 主题已切换 "当前主题模式: $theme" --icon="$HOME/.config/waypaper/scripts/icon.svg"

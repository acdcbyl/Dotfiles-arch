;;; early-init.el --- Emacs theme config -*- lexical-binding: t; -*-
;;; Commentary:

;;; Code:

;;使用catppuccin主题
(load-theme 'catppuccin :no-confirm)
(catppuccin-set-color 'base "{{colors.surface.default.hex}}")
(catppuccin-set-color 'rosewater "{{colors.orange.default.hex}}")
 (catppuccin-set-color 'pink "{{colors.red.default.hex}}")
 (catppuccin-set-color 'mauve "{{colors.purple.default.hex}}")
 (catppuccin-set-color 'red "{{colors.red.default.hex}}")
 (catppuccin-set-color 'maroon "{{colors.red.default.hex}}")
 (catppuccin-set-color 'peach "{{colors.orange.default.hex}}")
 (catppuccin-set-color 'yellow "{{colors.yellow.default.hex}}")
 (catppuccin-set-color 'green "{{colors.tertiary.default.hex}}")
 (catppuccin-set-color 'teal "{{colors.green.default.hex}}")
 (catppuccin-set-color 'sky "{{colors.primary.default.hex}}")
 (catppuccin-set-color 'sapphire "{{colors.blue.default.hex}}")
 (catppuccin-set-color 'blue "{{colors.primary.default.hex}}")
 (catppuccin-set-color 'lavender "{{colors.primary.default.hex}}")
 (catppuccin-set-color 'text "{{colors.on_surface.default.hex}}")
 (catppuccin-set-color 'subtext1 "#cccccc")
 (catppuccin-set-color 'subtext0 "#bbbbbb")
 (catppuccin-set-color 'overlay2 "#aaaaaa")
 (catppuccin-set-color 'overlay1 "#999999")
 (catppuccin-set-color 'overlay0 "#888888")
 (catppuccin-set-color 'surface2 "#777777")
 (catppuccin-set-color 'surface1 "#666666")
 (catppuccin-set-color 'surface0 "#555555")
 (catppuccin-set-color 'mantle "{{colors.surface.default.hex}}")
 (catppuccin-set-color 'crust "{{colors.surface.default.hex}}")
(catppuccin-reload)

(provide 'init-theme)


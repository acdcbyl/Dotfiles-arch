#!/bin/fish
set -Ux FZF_DEFAULT_OPTS "\
  --color=bg+:{{colors.surface_bright.default.hex}},bg:{{colors.surface.default.hex}},spinner:{{colors.tertiary.default.hex}},hl:{{colors.primary.default.hex}} \
  --color=fg:{{colors.on_surface.default.hex}},header:{{colors.primary.default.hex}},info:{{colors.tertiary.default.hex}},pointer:{{colors.on_surface.default.hex}} \
  --color=marker:{{colors.error.default.hex}},fg+:{{colors.on_surface.default.hex}},prompt:{{colors.primary.default.hex}},hl+:{{colors.primary.default.hex}} \
  --color=selected-bg:{{colors.surface_bright.default.hex}} \
  --multi"

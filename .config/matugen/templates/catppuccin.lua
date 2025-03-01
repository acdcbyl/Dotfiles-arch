return {
  "catppuccin/nvim",
  name = "catppuccin",
  opts = {
    -- flavour = "auto",
    -- configuration options...
    integrations = {
      blink_cmp = true,
      indent_blankline = {
        enabled = true,
        scope_color = "lavender", -- catppuccin color (eg. `lavender`) Default: text
        colored_indent_levels = false,
      },
      noice = true,
      snacks = {
        enabled = true,
        indent_scope_color = "lavender", -- catppuccin color (eg. `lavender`) Default: text
      },
    },
    transparent_background = false,
    background = {
      dark = "mocha",
      light = "latte",
    },
    color_overrides = {
      mocha = {
        rosewater = "{{colors.orange.default.hex}}",
        -- flamingo = "{{colors.orange.default.hex}}",
        pink = "{{colors.red.default.hex}}",
        mauve = "{{colors.purple.default.hex}}",
        red = "{{colors.red.default.hex}}",
        maroon = "{{colors.red.default.hex}}",
        peach = "{{colors.orange.default.hex}}",
        yellow = "{{colors.yellow.default.hex}}",
        green = "{{colors.tertiary.default.hex}}",
        teal = "{{colors.green.default.hex}}",
        sky = "{{colors.primary.default.hex}}",
        sapphire = "{{colors.blue.default.hex}}",
        blue = "{{colors.primary.default.hex}}",
        lavender = "{{colors.primary.default.hex}}",
        text = "{{colors.on_surface.default.hex}}",
        subtext1 = "#cccccc",
        subtext0 = "#bbbbbb",
        overlay2 = "#aaaaaa",
        overlay1 = "#999999",
        overlay0 = "#888888",
        surface2 = "#777777",
        surface1 = "#666666",
        surface0 = "#555555",
        -- surface0 = "{{colors.secondary.default.hex}}",
        base = "{{colors.surface.default.hex}}",
        mantle = "{{colors.surface.default.hex}}",
        crust = "{{colors.surface.default.hex}}",
      },
      latte = {
        rosewater = "{{colors.orange.default.hex}}",
        -- flamingo = "{{colors.orange.default.hex}}",
        pink = "{{colors.red.default.hex}}",
        mauve = "{{colors.purple.default.hex}}",
        red = "{{colors.red.default.hex}}",
        maroon = "{{colors.red.default.hex}}",
        peach = "{{colors.orange.default.hex}}",
        yellow = "{{colors.yellow.default.hex}}",
        green = "{{colors.tertiary.default.hex}}",
        teal = "{{colors.green.default.hex}}",
        sky = "{{colors.primary.default.hex}}",
        sapphire = "{{colors.blue.default.hex}}",
        blue = "{{colors.primary.default.hex}}",
        lavender = "{{colors.primary.default.hex}}",
        text = "{{colors.on_surface.default.hex}}",
        -- 明亮配色
        subtext1 = "#555555",
        subtext0 = "#666666",
        overlay2 = "#777777",
        overlay1 = "#888888",
        overlay0 = "#999999",
        surface2 = "#aaaaaa",
        surface1 = "#bbbbbb",
        surface0 = "#cccccc",
        base = "{{colors.surface.default.hex}}",
        mantle = "{{colors.surface.default.hex}}",
        crust = "{{colors.surface.default.hex}}",
      },
    },
  },
}

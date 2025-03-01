if not vim.g.neovide then
  return {} -- do nothing if not in a Neovide session
end

return {
  "AstroNvim/astrocore",
  ---@type AstroCoreOpts
  opts = {
    options = {
      opt = { -- configure vim.opt options
        -- configure font
        guifont = "Maple Mono NF CN",
        -- line spacing
        linespace = 0,
      },
      g = { -- configure vim.g variables
        -- configure scaling
        -- neovide_scale_factor = 1.0,
        -- configure padding
        neovide_padding_top = 20,
        neovide_padding_bottom = 20,
        neovide_padding_right = 20,
        neovide_padding_left = 20,

        -- vim.g.neovide_transparency = 0.95
        -- vim.g.neovide_normal_opacity = 0.95
      },
    },
  },
}

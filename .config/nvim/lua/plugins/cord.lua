return {
  "vyfor/cord.nvim",
  opts = {
    editor = {
      client = "neovim",
      tooltip = "Best editor",
    },
    buttons = {
      { label = "View Repository", url = function(opts) return opts.repo_url end },
      { label = "View Neovim", url = "https://neovim.io" },
    },
  },
}

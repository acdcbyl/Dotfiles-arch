-- if true then return {} end -- WARN: REMOVE THIS LINE TO ACTIVATE THIS FILE

-- Customize Treesitter

---@type LazySpec
return {
  "nvim-treesitter/nvim-treesitter",
  opts = {
    ensure_installed = {
      "lua",
      "vim",
      "rust",
      "typescript",
      "javascript",
      "bash",
      "css",
      "fish",
      "hyprlang",
      "html",
      "json",
      "regex",
      "scss",
      "python",
      "c",
      "markdown",
      "ron",
      -- add more arguments for adding more treesitter parsers
    },
  },
}

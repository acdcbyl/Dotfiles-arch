-- if true then return {} end -- WARN: REMOVE THIS LINE TO ACTIVATE THIS FILE

-- You can also add or configure plugins by creating files in this `plugins/` folder
-- PLEASE REMOVE THE EXAMPLES YOU HAVE NO INTEREST IN BEFORE ENABLING THIS FILE
-- Here are some examples:

---@type LazySpec
return {

  -- == Examples of Adding Plugins ==

  "andweeb/presence.nvim",
  {
    "ray-x/lsp_signature.nvim",
    event = "BufRead",
    config = function() require("lsp_signature").setup() end,
  },

  -- == Examples of Overriding Plugins ==

  -- customize dashboard options
  {
    "folke/snacks.nvim",
    opts = {
      dashboard = {
        width = 60,
        pane_gap = 16,
        preset = {
          header = table.concat({
            "░   ░░░  ░░        ░░░      ░░░  ░░░░  ░░        ░░  ░░░░  ░",
            "▒    ▒▒  ▒▒  ▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒  ▒▒▒▒▒  ▒▒▒▒▒   ▒▒   ▒",
            "▓  ▓  ▓  ▓▓      ▓▓▓▓  ▓▓▓▓  ▓▓▓  ▓▓  ▓▓▓▓▓▓  ▓▓▓▓▓        ▓",
            "█  ██    ██  ████████  ████  ████    ███████  █████  █  █  █",
            "█  ███   ██        ███      ██████  █████        ██  ████  █",
          }, "\n"),
        },
        sections = {
          {
            section = "header",
            align = "center",
            enabled = function() return not (vim.o.columns > 135) end,
          },
          {
            pane = 1,
            {
              enabled = function() return vim.o.columns > 135 end,
              section = "terminal",
              cmd = "chafa ~/.config/nvim/lua/plugins/dashboard-img/hajibai.png --passthrough=tmux --format=symbols --size=56x32 --stretch --align center; sleep .1",
              height = 32,
              width = 56,
              -- indent = 6,
              padding = 1,
            },
            {
              section = "startup",
              padding = 1,
              enabled = function() return vim.o.columns > 135 end,
            },
          },
          {
            pane = 2,
            {
              section = "terminal",
              cmd = "colorscript -e crunchbang-mini",
              height = 5,
              padding = 1,
              indent = 5,
            },
            {
              section = "keys",
              gap = 1,
              padding = 2,
            },
            {
              icon = " ",
              title = "Recent Files",
              padding = 1,
            },
            {
              section = "recent_files",
              limit = 6,
              indent = 2,
              padding = 1,
            },
            {
              icon = " ",
              title = "Projects",
              padding = 1,
            },
            {
              section = "projects",
              limit = 4,
              indent = 2,
              padding = 1,
            },
            {
              section = "startup",
              padding = 1,
              enabled = function() return not (vim.o.columns > 135) end,
            },
          },
        },
      },
    },
  },

  -- You can disable default plugins as follows:
  { "max397574/better-escape.nvim", enabled = true },

  -- You can also easily customize additional setup of plugins that is outside of the plugin's setup call
  {
    "L3MON4D3/LuaSnip",
    config = function(plugin, opts)
      require "astronvim.plugins.configs.luasnip"(plugin, opts) -- include the default astronvim config that calls the setup call
      -- add more custom luasnip configuration such as filetype extend or custom snippets
      local luasnip = require "luasnip"
      luasnip.filetype_extend("javascript", { "javascriptreact" })
    end,
  },

  {
    "windwp/nvim-autopairs",
    config = function(plugin, opts)
      require "astronvim.plugins.configs.nvim-autopairs"(plugin, opts) -- include the default astronvim config that calls the setup call
      -- add more custom autopairs configuration such as custom rules
      local npairs = require "nvim-autopairs"
      local Rule = require "nvim-autopairs.rule"
      local cond = require "nvim-autopairs.conds"
      npairs.add_rules(
        {
          Rule("$", "$", { "tex", "latex" })
            -- don't add a pair if the next character is %
            :with_pair(cond.not_after_regex "%%")
            -- don't add a pair if  the previous character is xxx
            :with_pair(
              cond.not_before_regex("xxx", 3)
            )
            -- don't move right when repeat character
            :with_move(cond.none())
            -- don't delete if the next character is xx
            :with_del(cond.not_after_regex "xx")
            -- disable adding a newline when you press <cr>
            :with_cr(cond.none()),
        },
        -- disable for .vim files, but it work for another filetypes
        Rule("a", "a", "-vim")
      )
    end,
  },
}

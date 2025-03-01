return {
  "goolord/alpha-nvim",
  event = "VimEnter",
  dependencies = { "echasnovski/mini.icons" },
  config = function()
    local alpha = require "alpha"
    local dashboard = require "alpha.themes.dashboard"
    dashboard.config.layout = {
      { type = "padding", val = 5 },
      dashboard.section.header,
      { type = "padding", val = 4 },
      dashboard.section.buttons,
      { type = "padding", val = 3 },
      dashboard.section.footer,
    }
    -- local function pick_color()
    --   local colors = { "String", "Identifier", "Keyword", "Number" }
    --   return colors[math.random(#colors)]
    -- end

    math.randomseed(os.time())

    --   dashboard.section.header.opts.hl = pick_color()
    --  dashboard.section.buttons.opts.hl = pick_color()
    -- dashboard.section.footer.opts.hl = pick_color()

    --    dashboard.section.buttons.val = {
    --     dashboard.button("gc", "   Git commits", "<cmd>:Telescope git_commits<CR>"),
    --     dashboard.button("ee", "   Open explorer", "<cmd>:Neotree float<CR>"),
    --     dashboard.button("ff", "   Find File", "<cmd>Telescope find_files<CR>"),
    --     dashboard.button("fw", "   Find Word", "<cmd>Telescope live_grep<CR>"),
    --     dashboard.button("wr", "   Restore", "<cmd>SessionRestore<CR>"),
    --   }

    local function get_data()
      local stats = require("lazy").stats()
      local ms = math.floor(stats.startuptime * 100) / 100
      return "🚀 Lazy-loaded " .. stats.loaded .. " plugins in " .. ms .. "ms"
    end

    dashboard.section.footer.val = get_data()
    alpha.setup(dashboard.opts)

    vim.cmd [[autocmd FileType alpha setlocal nofoldenable]]
  end,
}

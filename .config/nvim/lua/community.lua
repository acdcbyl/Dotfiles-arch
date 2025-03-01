--if true then return {} end -- WARN: REMOVE THIS LINE TO ACTIVATE THIS FILE

-- AstroCommunity: import any community modules here
-- We import this file in `lazy_setup.lua` before the `plugins/` folder.
-- This guarantees that the specs are processed before any user plugins.

---@type LazySpec
return {
  "AstroNvim/astrocommunity",
  { import = "astrocommunity.pack.lua" },
  -- import/override with your plugins folder

  -- 主题插件
  { import = "astrocommunity.colorscheme.catppuccin" },
  -- { import = "astrocommunity.colorscheme.tokyonight-nvim" },
  -- 杂项插件
  { import = "astrocommunity.markdown-and-latex.render-markdown-nvim" },
  { import = "astrocommunity.utility.noice-nvim" }, --增强命令模式
  -- { import = "astrocommunity.completion.cmp-cmdline" }, --为命令模式提供提示
  -- { import = "astrocommunity.media.image-nvim" },
  { import = "astrocommunity.media.img-clip-nvim" },
  { import = "astrocommunity.media.cord-nvim" }, --discord nvim信息
  { import = "astrocommunity.editing-support.conform-nvim" }, --轻量格式化代码
  -- { import = "astrocommunity.editing-support.nvim-treesitter-context" }, --代码导航
  { import = "astrocommunity.comment.ts-comments-nvim" },
  { import = "astrocommunity.search.grug-far-nvim" },
  -- { import = "astrocommunity.scrolling.neoscroll-nvim" },
  { import = "astrocommunity.motion.flash-nvim" },
  { import = "astrocommunity.completion.blink-cmp" },
  -- { import = "astrocommunity.indent.indent-blankline-nvim" }, --多彩分割线
  -- { import = "astrocommunity.recipes.heirline-vscode-winbar" },
  -- icons
  { import = "astrocommunity.icon.mini-icons" },
  -- color
  { import = "astrocommunity.color.twilight-nvim" },
  -- 诊断
  --{ import = "astrocommunity.diagnostics.trouble-nvim" },
  { import = "astrocommunity.diagnostics.tiny-inline-diagnostic-nvim" },
  -- AI
  { import = "astrocommunity.completion.avante-nvim" },
  -- 语言插件
  { import = "astrocommunity.pack.rust" },
  { import = "astrocommunity.pack.bash" },
  { import = "astrocommunity.pack.fish" },
  { import = "astrocommunity.pack.lua" },
  { import = "astrocommunity.pack.typescript" },
  { import = "astrocommunity.pack.markdown" },
  { import = "astrocommunity.pack.sql" },
  { import = "astrocommunity.pack.python" },
  { import = "astrocommunity.pack.json" },
  { import = "astrocommunity.pack.dart" },
  { import = "astrocommunity.pack.hyprlang" },
  { import = "astrocommunity.pack.full-dadbod" },
  { import = "astrocommunity.pack.xml" },
  -- 远程开发
  -- { import = "astrocommunity.remote-development.distant-nvim" },
  -- snacks插件
  { import = "astrocommunity.fuzzy-finder.snacks-picker" },
  -- tmux
  { import = "astrocommunity.terminal-integration.vim-tmux-navigator" },
}

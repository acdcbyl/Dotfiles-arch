return {
  "yetone/avante.nvim",
  opts = {
    provider = "openai",
    -- auto_suggestions_provider = "openai", -- Since auto-suggestions are a high-frequency operation and therefore expensive, it is recommended to specify an inexpensive provider or even a free provider: copilot
    openai = {
      disable_tools = true,
      endpoint = "https://openrouter.ai/api/v1",
      model = "deepseek/deepseek-r1:free",
      timeout = 30000, -- Timeout in milliseconds
      temperature = 0,
      -- max_tokens = 4096,
      -- optional
      api_key_name = "OPENAI_API_KEY", -- default OPENAI_API_KEY if not set
    },
  },
}

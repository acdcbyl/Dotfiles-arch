local selected_files = ya.sync(function()
	local tab, paths = cx.active, {}
	for _, u in pairs(tab.selected) do
		paths[#paths + 1] = tostring(u)
	end
	if #paths == 0 and tab.current.hovered then
		paths[1] = tostring(tab.current.hovered.url)
	end
	return paths
end)
local function notify(str)
	ya.notify({
		title = "Copy-file-contents",
		content = str,
		timeout = 3,
		level = "info",
	})
end

local state_option = ya.sync(function(state, attr)
	return state[attr]
end)

local function entry()
	-- Copy the contents of selected files into clipboard
	local files = selected_files()
	if #files == 0 then
		return
	end
	-- call the attributes from setup
	local append_char, notification = state_option("append_char"), state_option("notification")

	local text = ""
	for i, file in ipairs(files) do
		local f = io.open(file, "r")
		if f then
			local file_content = f:read("*a")
			-- Remove trailing newline before file appending
			file_content = file_content:gsub("%s+$", "")
			text = text .. file_content
			if i < #files then
				text = text .. append_char
			end
			f:close()
		end
	end

	-- Copy the file contents to clipboard
	ya.clipboard(text)
	-- Notify the user that the file contents have been copied to clipboard
	if notification then
		notify("Copied " .. #files .. " file(s) contents to clipboard")
	end
end

return {
	setup = function(state, options)
		-- Append character at the end of each file content
		state.append_char = options.append_char or "\n"
		-- Enable notification
		state.notification = options.notification and true
	end,
	entry = entry,
}

if status is-interactive
    # Commands to run in interactive sessions can go here
end
# ~/.config/fish/config.fish
fish_vi_key_bindings
function fish_user_key_bindings
    # 在 insert 模式下绑定 'jk' 到 escape
    bind -M insert jk "if commandline -P; commandline -f cancel; else; set fish_bind_mode default; commandline -f backward-char force-repaint; end"
    # 在可视模式下，使用 y 复制到系统剪贴板
    bind -M visual y 'fish_clipboard_copy; commandline -f end-selection'

    # 在正常模式下，使用 p 从系统剪贴板粘贴
    bind -M default p fish_clipboard_paste
end
# 检测是否在 Emacs shell 中运行
if test "$TERM" = dumb
    function fish_prompt
        echo "\$ "
    end
    function fish_right_prompt
    end
    function fish_greeting
    end
end
# Emulates vim's cursor shape behavior
#$fish_vi_force_cursor
# Set the normal and visual mode cursors to a block
set fish_cursor_default block
# Set the insert mode cursor to a line
set fish_cursor_insert line
# Set the replace mode cursors to an underscore
set fish_cursor_replace_one underscore
set fish_cursor_replace underscore
# Set the external cursor to a line. The external cursor appears when a command is started.
# The cursor shape takes the value of fish_cursor_default when fish_cursor_external is not specified.
set fish_cursor_external line
# The following variable can be used to configure cursor shape in
# visual mode, but due to fish_cursor_default, is redundant here
set fish_cursor_visual block
zoxide init fish | source
# Set up fzf key bindings
fzf --fish | source
# starship init fish | source

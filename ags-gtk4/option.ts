import { execAsync, GLib } from "astal";
import { mkOptions, opt } from "./lib/option";
import { gsettings } from "./lib/utils";

const options = mkOptions(
  `${GLib.get_user_config_dir()}/aiser-astal/config.json`,
  {
    wallpaper: {
      folder: opt(`${GLib.get_home_dir()}/Pictures/Star`, { cached: true }),
      current: opt(
        await execAsync("swww query")
          .then((out) => out.split("image:")[1].trim())
          .catch(() => ""),
        { cached: true },
      ),
    },
    dock: {
      position: opt("bottom"),
      pinned: opt(["firefox", "Alacritty", "org.gnome.Nautilus", "localsend"]),
    },
    bar: {
      position: opt("top"),
      separator: opt(true),
      start: opt(["launcher", "workspace"]),
      center: opt(["time", "notification"]),
      end: opt(["network_speed", "quicksetting"]),
    },
    desktop_clock: {
      position: opt<
        | "top_left"
        | "top"
        | "top_right"
        | "left"
        | "center"
        | "right"
        | "bottom_left"
        | "bottom"
        | "bottom_right"
      >("top_left"),
    },
    theme: {
      mode: opt(
        gsettings.get_string("color-scheme") == "prefer-light"
          ? "light"
          : "dark",
        { cached: true },
      ),
      bar: {
        bg_color: opt("$bg"),
        opacity: opt(1),
        border_radius: opt(6),
        margin: opt(10),
        padding: opt(3),
        border_width: opt(2),
        border_color: opt("$fg"),
        shadow: {
          offset: opt([6, 6]),
          blur: opt(0),
          spread: opt(0),
          color: opt("$fg"),
          opacity: opt(1),
        },
        button: {
          bg_color: opt("$bg"),
          fg_color: opt("$fg"),
          opacity: opt(1),
          border_radius: opt(8),
          border_width: opt(0),
          border_color: opt("$fg"),
          padding: opt([0, 4]),
          shadow: {
            offset: opt([0, 0]),
            blur: opt(0),
            spread: opt(0),
            color: opt("$fg"),
            opacity: opt(1),
          },
        },
      },
      window: {
        opacity: opt(1),
        border_radius: opt(6),
        margin: opt(10),
        padding: opt(10),
        dock_padding: opt(4),
        desktop_clock_padding: opt(4),
        border_width: opt(2),
        border_color: opt("$fg"),
        shadow: {
          offset: opt([6, 6]),
          blur: opt(0),
          spread: opt(0),
          color: opt("$fg"),
          opacity: opt(1),
        },
      },
      light: {
        bg: opt("#fbf1c7"),
        fg: opt("#3c3836"),
        accent: opt("#3c3836"),
        red: opt("#cc241d"),
      },
      dark: {
        bg: opt("#282828"),
        fg: opt("#ebdbb2"),
        accent: opt("#ebdbb2"),
        red: opt("#cc241d"),
      },
    },
  },
);

export default options;

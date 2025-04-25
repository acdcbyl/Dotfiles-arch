interface substitutions {
  icons: {
    [key: string]: string | undefined;
  };
  titles: {
    [key: string]: string | undefined;
  };
}

export const substitutions: substitutions = {
  icons: {
    "transmission-gtk": "transmission",
    "blueberry.py": "bluetooth",
    Caprine: "facebook-messenger",
    "de.shorsh.discord-screenaudio": "discord",
    "org.pwmt.zathura": "x-office-document",
    "code-url-handler": "visual-studio-code",
    "dev.zed.Zed": "zed",
    "": "preferences-desktop-display",
  },
  titles: {
    "io.github.Rirusha.Cassette": "Cassette",
    "com.github.Aylur.ags": "AGS",
    "transmission-gtk": "Transmission",
    "com.obsproject.Studio": "OBS",
    "com.usebottles.bottles": "Bottles",
    "com.github.wwmm.easyeffects": "Easy Effects",
    "org.gnome.TextEditor": "Text Editor",
    "org.gnome.design.IconLibrary": "Icon Library",
    "blueberry.py": "Blueberry",
    "org.wezfurlong.wezterm": "Wezterm",
    "com.raggesilver.BlackBox": "BlackBox",
    firefox: "Firefox",
    "org.gnome.Nautilus": "Files",
    "libreoffice-writer": "Writer",
    "chromium-browser": "Chromium",
    "dev.zed.Zed": "Zed",
    "org.telegram.desktop": "Telegram",
    "de.shorsh.discord-screenaudio": "Discord",
    "org.pwmt.zathura": "Zathura",
    kitty: "Kitty",
    "code-url-handler": "VSCode",
    "": "Desktop",
  },
};

export default {
  colorscheme: {
    dark: "night-light-symbolic",
    light: "night-light-symbolic",
  },
  wallpaper: "preferences-desktop-wallpaper-symbolic",
  cpu: "cpu-symbolic",
  ram: "ram-symbolic",
  user: {
    default: "user-available-symbolic", // 默认用户图标
  },
  // powerprofile: {
  // 	default: "power-profile-balanced-symbolic",
  // 	"power-saver": "power-profile-power-saver-symbolic",
  // 	"balanced": "power-profile-balanced-symbolic",
  // 	"performance": "power-profile-performance-symbolic",
  // },
  record: "applets-screenshooter-symbolic",
  record_alt: "screencast-recorded-symbolic",
  powerprofile: {
    0: "power-profile-balanced-symbolic",
    1: "power-profile-power-saver-symbolic",
    2: "power-profile-performance-symbolic",
  },
  colorselect: "color-picker-symbolic",
  screenshot: {
    full: "view-fullscreen-symbolic",
    area: "tool-crop-symbolic",
  },
  bluetooth: {
    enabled: "bluetooth-active-symbolic",
    disabled: "bluetooth-disabled-symbolic",
  },
  todo: {
    checkedAlt: "selection-mode-symbolic",
    checked: "radio-checked-symbolic",
    unchecked: "radio-symbolic",
  },
  fallback: {
    executable: "application-x-executable",
    notification: "dialog-information-symbolic",
    video: "video-x-generic-symbolic",
    audio: "audio-x-generic-symbolic",
  },
  network: {
    wired: "network-wired-symbolic",
  },
  ui: {
    add: "list-add",
    checked: "checkbox-checked-symbolic",
    close: "window-close-symbolic",
    colorpicker: "color-select-symbolic",
    info: "info-symbolic",
    link: "external-link-symbolic",
    lock: "system-lock-screen-symbolic",
    menu: "open-menu-symbolic",
    refresh: "view-refresh-symbolic",
    search: "system-search-symbolic",
    settings: "applications-system-symbolic",
    themes: "preferences-desktop-theme-symbolic",
    tick: "object-select-symbolic",
    time: "hourglass-symbolic",
    toolbars: "toolbars-symbolic",
    warning: "dialog-warning-symbolic",
    avatar: "avatar-default-symbolic",
    arrow: {
      right: "pan-end-symbolic",
      left: "pan-start-symbolic",
      down: "pan-down-symbolic",
      up: "pan-up-symbolic",
    },
  },
  audio: {
    mic: {
      muted: "microphone-disabled-symbolic",
      low: "microphone-sensitivity-low-symbolic",
      medium: "microphone-sensitivity-medium-symbolic",
      high: "microphone-sensitivity-high-symbolic",
    },
    volume: {
      muted: "audio-volume-muted-symbolic",
      low: "audio-volume-low-symbolic",
      medium: "audio-volume-medium-symbolic",
      high: "audio-volume-high-symbolic",
      overamplified: "audio-volume-overamplified-symbolic",
    },
    type: {
      headset: "audio-headphones-symbolic",
      speaker: "audio-speakers-symbolic",
      card: "audio-card-symbolic",
    },
    mixer: "media-playlist-shuffle-symbolic",
  },
  notifications: {
    noisy: "preferences-system-notifications-symbolic",
    silent: "notifications-disabled-symbolic",
  },
  media: {
    fallback: "audio-x-generic-symbolic",
    shuffle: {
      enabled: "media-playlist-shuffle-symbolic",
      disabled: "media-playlist-shuffle-symbolic",
    },
    loop: {
      none: "media-playlist-repeat-symbolic",
      track: "media-playlist-repeat-symbolic",
      playlist: "media-playlist-repeat-symbolic",
    },
    playing: "media-playback-pause-symbolic",
    paused: "media-playback-start-symbolic",
    stopped: "media-playback-start-symbolic",
    prev: "media-skip-backward-symbolic",
    next: "media-skip-forward-symbolic",
  },
  powermenu: {
    sleep: "system-hibernate-symbolic",
    reboot: "system-reboot-symbolic",
    logout: "system-log-out-symbolic",
    shutdown: "system-shutdown-symbolic",
    lockscreen: "system-lock-screen-symbolic",
  },
  brightness: {
    indicator: "display-brightness-symbolic",
    keyboard: "keyboard-brightness-symbolic",
    screen: "display-brightness-symbolic",
  },
};

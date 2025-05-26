import { Gtk, App } from "astal/gtk4";
import { GLib, monitorFile, writeFile, Variable, exec, Gio, execAsync } from "astal";
import { transparentScrimWindowNames, scrimWindowNames } from "./variables";
import AstalNotifd from "gi://AstalNotifd?version=0.1";
// import { controlCenterPage } from "../widget/ControlCenter";


export const time = Variable(GLib.DateTime.new_now_local()).poll(1000, () =>
  GLib.DateTime.new_now_local(),
);
export const uptime = Variable(Math.floor(GLib.get_monotonic_time() / 1000000)).poll(1000, () =>
  Math.floor(GLib.get_monotonic_time() / 1000000));

export function range(max: number) {
  return Array.from({ length: max + 1 }, (_, i) => i);
}

export const activePopupWindows = (scrimType: "transparent" | "opaque") => {
  const windowNames =
    scrimType === "transparent"
      ? transparentScrimWindowNames.get()
      : scrimWindowNames.get();

  return App.get_windows().filter(
    (window) => windowNames.includes(window.name) && window.visible,
  );
};

// export function toggleWindow(windowName: string) {
//   const window = App.get_window(windowName);
//   if (!window) return;
//
//   const isTransparent = transparentScrimWindowNames
//     .get()
//     .includes(windowName);
//
//   if (window.visible) {
//     window.visible = false;
//     if (windowName === "control-center") controlCenterPage.set("main");
//   } else {
//     if (isTransparent) {
//       if (
//         windowName === "notifications" &&
//         AstalNotifd.get_default().get_notifications().length === 0
//       )
//         return;
//       App.get_window("transparent-scrim")?.set_visible(true);
//     } else {
//       activePopupWindows("opaque").forEach(
//         (win) => (win.visible = false),
//       );
//       App.get_window("opaque-scrim")?.set_visible(true);
//     }
//     window.visible = true;
//   }
// }

export function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result != null) {
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };
  }
}

export const gsettings = new Gio.Settings({
  schema: "org.gnome.desktop.interface",
});

export const cacheDir = `${GLib.get_user_cache_dir()}/aiser-astal`;
// export function lookUpIcon(name?: string, size = 16) {
//   if (!name) return null;
//
//   return Gtk.IconTheme.lookup_icon(
//     name,
//     size,
//     Gtk.IconLookupFlags.USE_BUILTIN,
//   );
// }

export function separatorBetween(
  elements: Gtk.Widget[],
  orientation: Gtk.Orientation,
) {
  const spacedElements: Gtk.Widget[] = [];

  elements.forEach((element, index) => {
    if (index > 0) {
      spacedElements.push(new Gtk.Separator({ orientation: orientation }));
    }
    spacedElements.push(element);
  });

  return spacedElements;
}
export function monitorColorsChange() {
  const monitorList = [
    `${GLib.getenv("HOME")}/.config/ags/style/colors.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/applauncher.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/Bar.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/common.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/components.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/quicksettings.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/main.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/notification.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/dashboard.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/notificationsWindow.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/osd.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/mediaPlayer.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/popupMenu.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/powermenu.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/roundedcorners.scss`,
    `${GLib.getenv("HOME")}/.config/ags/style/wallpaperpicker.scss`,
  ];
  monitorList.forEach(file => {
    monitorFile(file, () => {
      const target = "/tmp/astal/style.css";
      exec(
        `sass ${GLib.getenv("HOME")}/.config/ags/style/main.scss ${target}`,
      );
      App.reset_css;
      App.apply_css(target, true);
    });
  });
}
type NotifUrgency = "low" | "normal" | "critical";
export function notifySend({
  appName,
  appIcon,
  urgency = "normal",
  image,
  icon,
  summary,
  body,
  actions,
}: {
  appName?: string;
  appIcon?: string;
  urgency?: NotifUrgency;
  image?: string;
  icon?: string;
  summary: string;
  body: string;
  actions?: {
    [label: string]: () => void;
  };
}) {
  const actionsArray = Object.entries(actions || {}).map(
    ([label, callback], i) => ({
      id: `${i}`,
      label,
      callback,
    }),
  );
  execAsync(
    [
      "notify-send",
      `-u ${urgency}`,
      appIcon && `-i ${appIcon}`,
      `-h "string:image-path:${!!icon ? icon : image}"`,
      `"${summary ?? ""}"`,
      `"${body ?? ""}"`,
      `-a "${appName ?? ""}"`,
      ...actionsArray.map((v) => `--action=\"${v.id}=${v.label}\"`),
    ].join(" "),
  )
    .then((out) => {
      if (!isNaN(Number(out.trim())) && out.trim() !== "") {
        actionsArray[parseInt(out)].callback();
      }
    })
    .catch(console.error);
}
export const now = () =>
  GLib.DateTime.new_now_local().format("%Y-%m-%d_%H-%M-%S");

export function dependencies(packages: string[]) {
  for (const pkg of packages) {
    const result = GLib.find_program_in_path(pkg);
    if (!result) {
      return false;
    }
  }
  return true;
}

export function ensureDirectory(path: string) {
  if (!GLib.file_test(path, GLib.FileTest.EXISTS))
    Gio.File.new_for_path(path).make_directory_with_parents(null);
}

export async function sh(cmd: string | string[]) {
  return execAsync(cmd).catch((err) => {
    console.error(typeof cmd === "string" ? cmd : cmd.join(" "), err);
    return "";
  });
}

export async function bash(
  strings: TemplateStringsArray | string,
  ...values: unknown[]
) {
  const cmd =
    typeof strings === "string"
      ? strings
      : strings.flatMap((str, i) => str + `${values[i] ?? ""}`).join("");

  return execAsync(["bash", "-c", cmd]).catch((err) => {
    console.error(cmd, err);
    return "";
  });
}

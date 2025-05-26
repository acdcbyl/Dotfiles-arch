import { Astal, App, Gtk, Gdk } from "astal/gtk4";
import { time, uptime } from "../../lib/utils";
import { GLib } from "astal";
import AstalNotifd from "gi://AstalNotifd";
import PopupWindow from "../../common/PopupWindow";
import Notification from "../Notifactions/Notification";
import { bind, Variable } from "astal";
import options from "../../option";

export const WINDOW_NAME = "dashboard";
const notifd = AstalNotifd.get_default();
// 格式化函数，将秒数转换为易读格式
function formatTime(seconds) {
  const days = Math.floor(seconds / 86400);
  seconds %= 86400;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  let result = "";
  if (days > 0) result += `${days}d `;
  if (hours > 0 || days > 0) result += `${hours}h `;
  if (minutes > 0 || hours > 0 || days > 0) result += `${minutes}m `;
  result += `${seconds}s`;

  return result;
}
const { bar } = options;

const layout = Variable.derive(
  [bar.position, bar.start, bar.center, bar.end],
  (pos, start, center, end) => {
    if (start.includes("time")) return `${pos}_left`;
    if (center.includes("time")) return `${pos}_center`;
    if (end.includes("time")) return `${pos}_right`;

    return `${pos}_center`;
  },
);

function NotifsScrolledWindow() {
  const notifd = AstalNotifd.get_default();
  return (
    <Gtk.ScrolledWindow vexpand>
      <box vertical hexpand={false} vexpand={false} spacing={8} orientation={Gtk.Orientation.VERTICAL}>
        {bind(notifd, "notifications").as((notifs) =>
          notifs.map((e) => <Notification n={e} showActions={true} />),
        )}
        <box
          halign={Gtk.Align.CENTER}
          valign={Gtk.Align.CENTER}
          cssClasses={["not-found"]}
          vertical
          vexpand
          visible={bind(notifd, "notifications").as((n) => n.length === 0)}
        >
          <image
            iconName="notification-disabled-symbolic"
            iconSize={Gtk.IconSize.LARGE}
          />
          <label label="Your inbox is empty" />
        </box>
      </box>
    </Gtk.ScrolledWindow>
  );
}

function DNDButton() {
  return (
    <button
      tooltipText={"Do Not Disturb"}
      onClicked={() => {
        notifd.set_dont_disturb(!notifd.get_dont_disturb());
      }}
      cssClasses={bind(notifd, "dont_disturb").as((dnd) => {
        const classes = ["dnd"];
        dnd && classes.push("active");
        return classes;
      })}
      label={"DND"}
      halign={Gtk.Align.START}
    />
  );
}

function ClearButton() {
  return (
    <button
      cssClasses={["clear"]}
      halign={Gtk.Align.END}
      onClicked={() => {
        notifd.notifications.forEach((n) => n.dismiss());
        App.toggle_window(WINDOW_NAME);
      }}
      sensitive={bind(notifd, "notifications").as((n) => n.length > 0)}
    >
      <image iconName={"user-trash-full-symbolic"} />
    </button>
  );
}

const period = Variable('').poll(1000, (): string => GLib.DateTime.new_now_local().format('%p') || '');
function Dashboard(_gdkmonitor: Gdk.Monitor) {
  return (
    <PopupWindow
      name={WINDOW_NAME}

      // layer={Astal.Layer.BOTTOM}
      //     animation="slide top"
      layout={layout.get()}
      // anchor={Astal.WindowAnchor.TOP}
      margin={15}
      onDestroy={() => layout.drop()}
    >
      <box>
        <box
          cssClasses={["notifications-container"]}
          vertical
          vexpand={false}
        >
          <Gtk.Separator />
          <NotifsScrolledWindow />

          <box cssClasses={["window-header"]} hexpand>
            {/* <label label={"Notifications"} hexpand xalign={0} /> */}
            {/* <label */}
            {/*   useMarkup={true} */}
            {/*   label={"<b> Notifications</b>"} */}
            {/*   hexpand */}
            {/*   xalign={0} */}
            {/* /> */}
            <DNDButton />
            <box hexpand />
            <ClearButton />
          </box>
        </box>
        <box spacing={8} cssClasses={["datemenu-container"]}>
          <box hexpand vertical halign={Gtk.Align.CENTER} cssClasses={["dash-main"]}>
            <label
              label={time((t) => t.format("%H:%M")!)}
              halign={Gtk.Align.CENTER}
              cssClasses={["time-label"]}
            />
            <box halign={Gtk.Align.CENTER}>
              <label
                label={"uptime: "}
                cssClasses={["uptime-label"]}
                xalign={0}
              />
              <label
                label={uptime().as(seconds => formatTime(seconds))}
                halign={Gtk.Align.CENTER}
                cssClasses={["uptime-label"]}
              />
            </box>
            <Gtk.Calendar halign={Gtk.Align.CENTER} />
          </box>
        </box>
      </box>
    </PopupWindow>
  );
}

export default function (_gdkmonitor: Gdk.Monitor) {
  Dashboard(_gdkmonitor);
  layout.subscribe(() => {
    App.remove_window(App.get_window(WINDOW_NAME)!);
    Dashboard(_gdkmonitor);
  });
}

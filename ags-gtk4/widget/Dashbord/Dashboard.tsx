import { Astal, App, Gtk, Gdk } from "astal/gtk4";
import { time, uptime } from "../../lib/utils";
import { GLib } from "astal";
import AstalNotifd from "gi://AstalNotifd";
import PopupWindow from "../../common/PopupWindow";
import Notification from "../Notifactions/Notification";
import { WeatherIconDebug, WeatherPanel } from "./Weather";
import MediaPlayers from "../Quicksettings/MediaPlayer";
import { bind, Variable } from "astal";
import options from "../../option";
import { Switch } from "astal/gtk4/widget";

export const WINDOW_NAME = "dashboard";
const notifd = AstalNotifd.get_default();
// 格式化函数，将秒数转换为易读格式
function formatTime(seconds: any) {
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
    <Gtk.ScrolledWindow vexpand cssClasses={["scroll"]}>
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
            pixelSize={50}
          />
          <label label="Your inbox is empty" />
        </box>
      </box>
    </Gtk.ScrolledWindow>
  );
}

function DNDButton() {
  return (
    <box spacing={6}>
      <label label={"Do Not Disturb"} />
      <Switch
        heightRequest={10}
        active={bind(notifd, "dont_disturb")}
        onStateSet={(self, state) => {
          self.set_state(state)
          notifd.set_dont_disturb(state);
        }}
        // label={"DND"}
        halign={Gtk.Align.CENTER}
      />
    </box>
  );
}

function ClearButton() {
  return (
    <button
      cssClasses={["clear"]}
      halign={Gtk.Align.CENTER}
      onClicked={() => {
        notifd.notifications.forEach((n) => n.dismiss());
        App.toggle_window(WINDOW_NAME);
      }}
      sensitive={bind(notifd, "notifications").as((n) => n.length > 0)}
    >
      <box spacing={6}>
        <label label={"Clear"} />
        <image iconName={"user-trash-full-symbolic"} />
      </box>
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
      anchor={Astal.WindowAnchor.TOP}
      margin={10}
    //onDestroy={() => layout.drop()}
    >
      <box>
        <box
          cssClasses={["notifications-container"]}
          vertical
          vexpand={false}
        >
          <Gtk.Separator />
          <NotifsScrolledWindow />

          <box cssClasses={["window-header"]}>
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
            <WeatherPanel />
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

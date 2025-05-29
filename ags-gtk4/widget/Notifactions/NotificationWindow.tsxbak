import AstalNotifd from "gi://AstalNotifd";
import PopupWindow from "../../common/PopupWindow";
import { App, Astal, Gtk, Gdk } from "astal/gtk4";
import { bind, Variable } from "astal";
import Notification from "./Notification";

export const WINDOW_NAME = "notifications";
const notifd = AstalNotifd.get_default();

// 创建一个简单的配置对象
const defaultPosition = {
  position: "top",
  start: ["clock", "systray"],
  center: ["notification"],
  end: ["battery", "power"]
};

// 保留 layout 常量的计算逻辑
const layout = Variable.derive(
  [
    Variable(defaultPosition.position),
    Variable(defaultPosition.start),
    Variable(defaultPosition.center),
    Variable(defaultPosition.end)
  ],
  (pos, start, center, end) => {
    if (start.includes("notification")) return `${pos}_left`;
    if (center.includes("notification")) return `${pos}_center`;
    if (end.includes("notification")) return `${pos}_right`;

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
    />
  );
}

function ClearButton() {
  return (
    <button
      cssClasses={["clear"]}
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

function NotificationWindow(_gdkmonitor: Gdk.Monitor) {
  return (
    <PopupWindow
      name={WINDOW_NAME}
      // layer={Astal.Layer.BOTTOM}
      //     animation="slide top"
      ///   layout={layout.get()}
      anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.RIGHT}
      // marginTop={25}
      onDestroy={() => layout.drop()}
    >
      <box
        cssClasses={["notifications-container"]}
        vertical
        vexpand={false}
      >
        <box cssClasses={["window-header"]}>
          {/* <label label={"Notifications"} hexpand xalign={0} /> */}
          <label
            useMarkup={true}
            label={"<b> Notifications</b>"}
            hexpand
            xalign={0}
          />
          {/* <image */}
          {/*   iconName={"preferences-system-notifications-symbolic"} */}
          {/*   hexpand */}
          {/*   halign={Gtk.Align.START} */}
          {/* /> */}
          <DNDButton />
          <ClearButton />
        </box>
        <Gtk.Separator />
        <NotifsScrolledWindow />
      </box>
    </PopupWindow>
  );
}

export default function (_gdkmonitor: Gdk.Monitor) {
  NotificationWindow(_gdkmonitor);

  layout.subscribe(() => {
    App.remove_window(App.get_window(WINDOW_NAME)!);
    NotificationWindow(_gdkmonitor);
  });
}

import AstalNotifd from "gi://AstalNotifd";
import BarButton from "../BarButton";
import { App } from "astal/gtk4";
import { bind, Variable } from "astal";
import AstalApps from "gi://AstalApps";
// import { WINDOW_NAME } from "../notification/NotificationWindow";

const notifd = AstalNotifd.get_default();

function NotifIcon() {
  const getVisible = () =>
    notifd.dont_disturb ? true : notifd.notifications.length <= 0;

  const visibility = Variable(getVisible())
    .observe(notifd, "notify::dont-disturb", () => {
      return getVisible();
    })
    .observe(notifd, "notify::notifications", () => getVisible());

  return (
    <image
      onDestroy={() => visibility.drop()}
      visible={visibility()}
      cssClasses={["icon"]}
      iconName={bind(notifd, "dont_disturb").as(
        (dnd) => `notifications-${dnd ? "disabled-" : ""}symbolic`,
      )}
    />
  );
}

export default function NotifButton() {
  const apps = new AstalApps.Apps();
  // const substitute = {
  //   "Screen Recorder": "screencast-recorded-symbolic",
  //   Screenshot: "screenshot-recorded-symbolic",
  //   Hyprpicker: "color-select-symbolic",
  //   rmpc: "folder-music-symbolic",
  // };
  const substitute: {
    "Screen Recorder": string;
    Screenshot: string;
    Hyprpicker: string;
    rmpc: string;
    foamshot: string;
    "change-color": string;
    [key: string]: string | undefined;
  } = {
    "Screen Recorder": "screencast-recorded-symbolic",
    Screenshot: "screenshot-recorded-symbolic",
    Hyprpicker: "color-select-symbolic",
    foamshot: "screenshot-recorded-symbolic",
    rmpc: "folder-music-symbolic",
    "change-color": "preferences-desktop-theme-global-symbolic",
  };
  return (
    <BarButton
      cssName={"bar__notifications"}
      onClicked={() => {
        App.toggle_window("notifications");
      }}
    >
      {bind(notifd, "dontDisturb").as((dnd) =>
        !dnd ? (
          <box spacing={6}>
            {bind(notifd, "notifications").as((n) => {
              if (n.length > 0) {
                return [
                  ...n.slice(0, 3).map((e) => {
                    const getFallback = (appName: string) => {
                      const getApp = apps.fuzzy_query(appName);
                      if (getApp.length != 0) {
                        return getApp[0].get_icon_name();
                      }
                      return "unknown";
                    };
                    const fallback =
                      e.app_icon.trim() === ""
                        ? getFallback(e.app_name)
                        : e.app_icon;
                    const icon = substitute[e.app_name] ?? fallback;
                    return <image iconName={icon} />;
                  }),
                  <label
                    visible={n.length > 3}
                    cssName="bar__notifications_label"
                    label={""}
                  />,
                ];
              }
              return <NotifIcon />;
            })}
          </box>
        ) : (
          <NotifIcon />
        ),
      )}
    </BarButton>
  );
}

import { bind, Binding, Gio, Variable } from "astal";
import { Gtk, Gdk } from "astal/gtk4";
import Apps from "gi://AstalApps";
import Hyprland from "gi://AstalHyprland"
import Pango from "gi://Pango?version=1.0";

const hyprland = Hyprland.get_default()
const workspaces = Variable(hyprland.get_workspaces())
const clients = Variable(hyprland.get_clients())
const focusedClient = Variable(hyprland.get_focused_client())

function getIcon(appName: any) {
  const apps = new Apps.Apps({
    nameMultiplier: 2,
    entryMultiplier: 0,
    executableMultiplier: 2,
  })
  let appsIcon = apps.fuzzy_query(appName);
  let icon: any;
  for (let app of appsIcon) {
    icon = app.get_icon_name();
    return icon;
  }
  return "terminal";
}

// 帮助函数：查找图标
function lookUpIcon(iconName: string | null | undefined): string {
  // 添加空值检查
  if (!iconName) {
    return "application-x-executable";
  }

  const display = Gdk.Display.get_default();
  if (!display) {
    console.error("No display found");
    return "application-x-executable";
  }
  const iconTheme = Gtk.IconTheme.get_for_display(display);
  // 尝试多种可能的图标名称格式
  const possibleNames = [
    iconName.toLowerCase(),                    // 全小写
    iconName.toLowerCase().replace(/\s/g, '-'), // 替换空格为横线
    iconName.toLowerCase().replace(/\s/g, ''),  // 移除空格
  ];
  for (const name of possibleNames) {
    if (iconTheme.has_icon(name)) {
      return name;
    }
    // 尝试常见的图标命名方式
    const variants = [
      `com.${name}`,
      `org.${name}`,
      `${name}.desktop`,
      `application-x-${name}`,
    ];
    for (const variant of variants) {
      if (iconTheme.has_icon(variant)) {
        return variant;
      }
    }
  }
  // 如果找不到图标，返回一个默认图标
  return "application-x-executable";
}

// 图标组件
const AppIcon = ({
  iconName,
  size = 16
}: {
  iconName: Binding<string | null | undefined>,
  size?: number
}) => {
  return (
    <image
      iconName={iconName.as(name => lookUpIcon(name))}
      pixelSize={size}
    />
  );
};
const handleChanges = () => {
  workspaces.set(hyprland.get_workspaces())
  clients.set(hyprland.get_clients())
  focusedClient.set(hyprland.get_focused_client())
}

hyprland.connect("client-added", handleChanges)
hyprland.connect("client-removed", handleChanges)
hyprland.connect("notify::focused-client", handleChanges)

export function RunningAppsPanelButton() {
  const combinedState = Variable.derive([clients, focusedClient], (clientsValue, focused) => ({
    clients: clientsValue,
    focused: focused
  }));

  return (
    <box >
      {bind(combinedState).as(({ clients: clientsValue, focused }) =>
        clientsValue
          .slice() // Create a shallow copy for sorting (optional)
          .sort((a, b) => a.pid - b.pid) // Sort by PID (assuming 'pid' is the correct property) (optional)
          .map((client) => {
            const iconName = getIcon(client.class); // Assuming 'class' holds the app name
            const clientClassBinding = bind(client, "class");
            const isFocused = focused && focused.pid === client.pid;
            return (
              <button
                cssClasses={["runningapps"]}
                key={client.pid}
                onButtonPressed={(self, event) => {
                  const button = event.get_button();
                  if (button === 2) {
                    console.log("Middleclick");
                    hyprland.dispatch("killwindow", `pid:${client.pid}`);
                  }
                  if (button === 1) {
                    hyprland.dispatch("focuswindow", `pid:${client.pid}`);
                  }
                }}
              >
                <box spacing={4}>
                  {/* <image iconName={iconName} /> */}
                  <AppIcon
                    iconName={clientClassBinding}
                    size={16}
                  />
                  <revealer
                    transitionType={Gtk.RevealerTransitionType.SLIDE_RIGHT}
                    transitionDuration={500}
                    revealChild={isFocused}>
                    <label label={bind(client, "title").as(value => value ? String(value) : "")}
                      maxWidthChars={10}
                      ellipsize={Pango.EllipsizeMode.END} />
                  </revealer>
                </box>
              </button>
            );
          })
      )}
    </box>
  );
}

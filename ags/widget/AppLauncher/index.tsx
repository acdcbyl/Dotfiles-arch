import { App, Astal, Widget } from "astal/gtk3";
import { bind, Variable } from "astal";
import AstalApps from "gi://AstalApps?version=0.1";
import Gio from "gi://Gio?version=2.0";
import AppItem from "./AppItem";
import PopupWindow from "../../common/PopupWindow";

const apps = new AstalApps.Apps();
const query = Variable<string>("");

export default () => {
  // 创建文件监控器
  const directory = Gio.File.new_for_path("/usr/share/applications/");
  let monitor: Gio.FileMonitor;

  const refreshAppList = () => {
    // 重新初始化 apps 并触发查询更新
    apps.reload();
    query.set(query.value); // 触发查询更新
  };

  const startMonitoring = () => {
    try {
      monitor = directory.monitor_directory(
        Gio.FileMonitorFlags.NONE,
        null
      );

      // 监听目录变化事件
      monitor.connect("changed", (_, file, __, event_type) => {
        // 当文件被创建、删除、修改或移动时刷新应用列表
        if (event_type !== Gio.FileMonitorEvent.CHANGED &&
          event_type !== Gio.FileMonitorEvent.UNCHANGED) {
          refreshAppList();
        }
      });
    } catch (err) {
      console.error("监控目录失败:", err);
    }
  };

  // 启动目录监控
  startMonitoring();

  const items = query((query) =>
    apps
      .fuzzy_query(query)
      .map((app: AstalApps.Application) => AppItem(app)),
  );

  const Entry = new Widget.Entry({
    text: bind(query),
    canFocus: true,
    className: "app-launcher__input",
    onActivate: () => {
      items.get()[0]?.app.launch();
      App.toggle_window("app-launcher");
    },
    setup: (self) => {
      self.hook(self, "notify::text", () => {
        query.set(self.get_text());
      });
    },
  });

  return (
    <PopupWindow
      scrimType="transparent"
      visible={false}
      margin={12}
      vexpand={true}
      name="app-launcher"
      namespace="app-launcher"
      className="AppLauncher"
      keymode={Astal.Keymode.EXCLUSIVE}
      exclusivity={Astal.Exclusivity.NORMAL}
      layer={Astal.Layer.TOP}
      anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT}
      application={App}
      onKeyPressEvent={(self, event) => {
        const [keyEvent, keyCode] = event.get_keycode();
        if (keyEvent && keyCode == 9) {
          App.toggle_window(self.name);
        }
      }}
      setup={(self) => {
        self.hook(self, "notify::visible", () => {
          if (!self.get_visible()) {
            query.set("");
          } else {
            Entry.grab_focus();
          }
        });
      }}
    >
      <box className="app-launcher" vertical>
        {Entry}
        <scrollable vexpand>
          <box className="app-launcher__list" vertical>
            {items}
          </box>
        </scrollable>
      </box>
    </PopupWindow>
  );
};

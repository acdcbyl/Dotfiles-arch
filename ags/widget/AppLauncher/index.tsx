import { App, Astal, Widget } from "astal/gtk3";
import { bind, Variable } from "astal";
import AstalApps from "gi://AstalApps?version=0.1";
import Gio from "gi://Gio?version=2.0";
import GLib from "gi://GLib?version=2.0";
import AppItem from "./AppItem";
import PopupWindow from "../../common/PopupWindow";

const apps = new AstalApps.Apps();
const query = Variable<string>("");

export default () => {
  // 创建文件监控器
  const directory = Gio.File.new_for_path("/usr/share/applications/");
  let monitor: Gio.FileMonitor | null = null;
  let refreshTimeout: number | null = null;

  // 使用防抖动机制刷新应用列表
  const refreshAppList = () => {
    // 如果已有一个定时器在等待，先清除它
    if (refreshTimeout !== null) {
      GLib.source_remove(refreshTimeout);
      refreshTimeout = null;
    }

    // 延迟300毫秒再刷新，避免短时间内多次刷新
    refreshTimeout = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 300, () => {
      // 重新初始化 apps 对象
      apps.reload();
      // 重新触发查询 - 使用正确的API
      query.set(query.get());
      refreshTimeout = null;
      return GLib.SOURCE_REMOVE;
    });
  };

  const startMonitoring = () => {
    try {
      monitor = directory.monitor_directory(
        Gio.FileMonitorFlags.NONE,
        null
      );

      // 监听目录变化事件 - 修正非法常量
      monitor.connect("changed", (_, file, __, event_type) => {
        // 只有在文件内容变化时不触发刷新
        if (event_type !== Gio.FileMonitorEvent.CHANGED) {
          refreshAppList();
        }
      });
    } catch (err) {
      console.error("监控目录失败:", err);
    }
  };

  // 懒加载：仅在窗口首次可见时启动监控
  const initOnce = () => {
    let initialized = false;
    return () => {
      if (!initialized) {
        startMonitoring();
        initialized = true;
      }
    };
  };

  const lazyInitMonitoring = initOnce();

  // 保持原始的查询和项目创建逻辑
  const items = query((q) =>
    apps
      .fuzzy_query(q)
      .map((app: AstalApps.Application) => AppItem(app)),
  );

  const Entry = new Widget.Entry({
    text: bind(query),
    canFocus: true,
    className: "app-launcher__input",
    onActivate: () => {
      const firstItem = items.get()[0];
      if (firstItem?.app) {
        firstItem.app.launch();
        App.toggle_window("app-launcher");
      }
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
            // 窗口变为可见时，懒加载初始化监控器
            lazyInitMonitoring();
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

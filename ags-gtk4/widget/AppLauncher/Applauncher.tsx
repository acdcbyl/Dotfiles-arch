import { App, Gtk, hook, Gdk, Astal } from "astal/gtk4";
import { Variable } from "astal";
import Pango from "gi://Pango";
import AstalApps from "gi://AstalApps";
import PopupWindow from "../../common/PopupWindow";
import { Gio } from "astal";
import options from "../../option";
import Picture from "../../common/Picture";
const { bar } = options;

const layout = Variable.derive(
  [bar.position, bar.start, bar.center, bar.end],
  (pos, start, center, end) => {
    if (start.includes("launcher")) return `${pos}_left`;
    if (center.includes("launcher")) return `${pos}_center`;
    if (end.includes("launcher")) return `${pos}_right`;

    return `${pos}_center`;
  },
);

// Create apps instance
const apps = new AstalApps.Apps();

// Monitor for applications directory
let appsMonitor: Gio.FileMonitor | null = null;
// 添加节流控制变量
let reloadTimeout: number | null = null;
let pendingChanges = 0;
const RELOAD_THROTTLE_MS = 2000; // 2秒节流时间
import GLib from "gi://GLib";

// 优化后的重载函数，使用节流和计数机制
function throttledReload() {
  // 如果已经有一个待处理的重载，只增加计数
  if (reloadTimeout !== null) {
    pendingChanges++;
    return;
  }

  // 重置计数并设置一个新的节流定时器
  pendingChanges = 0;

  // GLib.timeout_add实际返回的是number类型的ID
  reloadTimeout = GLib.timeout_add(GLib.PRIORITY_DEFAULT, RELOAD_THROTTLE_MS, () => {
    try {
      console.log(`执行应用列表重载（积累了 ${pendingChanges + 1} 个变更）`);
      apps.reload();
    } catch (error) {
      console.error("重载应用列表失败:", error);
    } finally {
      // 重置节流控制
      reloadTimeout = null;

      // 如果在重载过程中有新的变更，安排另一次重载
      if (pendingChanges > 0) {
        console.log(`检测到额外的 ${pendingChanges} 个变更，安排新的重载`);
        throttledReload();
      }
    }

    // 返回false表示不再继续这个timeout
    return false;
  });
}

// Function to set up file monitoring for /usr/share/applications
function setupAppsFolderMonitor() {
  const appsFolder = Gio.File.new_for_path('/usr/share/applications');

  try {
    // Create a file monitor for the applications directory
    appsMonitor = appsFolder.monitor_directory(
      Gio.FileMonitorFlags.WATCH_MOVES, // 优化：使用WATCH_MOVES追踪文件移动而不是创建+删除
      null
    );

    // 过滤重要的变更类型
    const significantChangeTypes = [
      Gio.FileMonitorEvent.CREATED,
      Gio.FileMonitorEvent.DELETED,
      Gio.FileMonitorEvent.RENAMED,
      // 只处理桌面文件的内容变更
      Gio.FileMonitorEvent.CHANGED
    ];

    // Connect to the changed signal
    appsMonitor.connect('changed', (monitor, file, otherFile, eventType) => {
      // 获取文件名来判断文件类型
      const filePath = file?.get_path() || "";

      // 只处理.desktop文件的变更
      if (!filePath.endsWith('.desktop') && eventType === Gio.FileMonitorEvent.CHANGED) {
        return;
      }

      // 只处理重要的变更类型
      if (significantChangeTypes.includes(eventType)) {
        console.log(`检测到应用目录变更: ${eventType} 文件: ${filePath}`);
        throttledReload();
      }
    });

    console.log('成功设置 /usr/share/applications 目录监控');
  } catch (error) {
    console.error("监控目录失败:", error);
  }
}

// 添加一个函数来清理监控和定时器资源
function cleanupMonitor() {
  if (appsMonitor) {
    appsMonitor.cancel();
    appsMonitor = null;
    console.log('应用目录监控已取消');
  }

  if (reloadTimeout !== null) {
    // 使用GLib.source_remove清除定时器ID
    GLib.source_remove(reloadTimeout);
    reloadTimeout = null;
  }
}

const text = Variable("");
export const WINDOW_NAME = "app-launcher";

function hide() {
  App.get_window(WINDOW_NAME)?.set_visible(false);
}

function AppButton({ app }: { app: AstalApps.Application }) {
  return (
    <button
      cssClasses={["app-button"]}
      onClicked={() => {
        hide();
        app.launch();
      }}
    >
      <box spacing={8}>
        <image iconName={app.iconName} pixelSize={32} />
        <box valign={Gtk.Align.CENTER} vertical>
          <label
            cssClasses={["name"]}
            ellipsize={Pango.EllipsizeMode.END}
            xalign={0}
            label={app.name}
          />
          {app.description && (
            <label
              cssClasses={["description"]}
              ellipsize={Pango.EllipsizeMode.END}
              maxWidthChars={24}
              wrap
              xalign={0}
              label={app.description}
            />
          )}
        </box>
      </box>
    </button>
  );
}

function SearchEntry() {
  const onEnter = () => {
    const results = apps.fuzzy_query(text.get());
    if (results && results.length > 0) {
      results[0].launch();
      hide();
    }
  };

  return (
    <overlay cssClasses={["entry-overlay"]} heightRequest={60}>
      <entry
        type="overlay"
        vexpand
        primaryIconName={"system-search-symbolic"}
        placeholderText="Search..."
        text={text.get()}
        setup={(self) => {
          hook(self, App, "window-toggled", (_, win) => {
            const winName = win.name;
            const visible = win.visible;
            if (winName == WINDOW_NAME && visible) {
              text.set("");
              self.set_text("");
              self.grab_focus();
            }
          });
        }}
        onChanged={(self) => text.set(self.text)}
        onActivate={onEnter}
      />
    </overlay>
  );
}

function AppsScrolledWindow() {
  const list = text((text) => apps.fuzzy_query(text));
  return (
    <Gtk.ScrolledWindow vexpand>
      <box spacing={6} vertical>
        {list.as((list) => list ? list.map((app) => <AppButton app={app} />) : [])}
        <box
          halign={Gtk.Align.CENTER}
          valign={Gtk.Align.CENTER}
          cssClasses={["not-found"]}
          vertical
          vexpand
          visible={list.as((l) => !l || l.length === 0)}
        >
          <image
            iconName="system-search-symbolic"
            iconSize={Gtk.IconSize.LARGE}
          />
          <label label="No match found" />
        </box>
      </box>
    </Gtk.ScrolledWindow>
  );
}

export default function Applauncher(_gdkmonitor: Gdk.Monitor) {
  // Set up the monitoring when launcher is created
  setupAppsFolderMonitor();

  return (
    <PopupWindow name={WINDOW_NAME} anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT} margin={10} layer={Astal.Layer.TOP}>
      <box
        cssClasses={["applauncher-container"]}
        vertical
        vexpand={false}
        setup={(self) => {
          // Add cleanup for the monitor when the window is destroyed
          self.connect('destroy', () => {
            cleanupMonitor(); // 使用统一的清理函数
          });
        }}
      >
        <SearchEntry />
        <AppsScrolledWindow />
      </box>
    </PopupWindow>
  );
}

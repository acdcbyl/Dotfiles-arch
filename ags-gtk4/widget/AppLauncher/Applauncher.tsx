import { App, Gtk, hook, Gdk, Astal } from "astal/gtk4";
import { Variable } from "astal";
import Pango from "gi://Pango";
import AstalApps from "gi://AstalApps";
import PopupWindow from "../../common/PopupWindow";
import { Gio } from "astal";
import options from "../../option";
import Picture from "../../common/Picture";
const { wallpaper } = options;

// Create apps instance
const apps = new AstalApps.Apps();

// Monitor for applications directory
let appsMonitor: Gio.FileMonitor | null = null;

// Function to set up file monitoring for /usr/share/applications
function setupAppsFolderMonitor() {
  const appsFolder = Gio.File.new_for_path('/usr/share/applications');

  try {
    // Create a file monitor for the applications directory
    appsMonitor = appsFolder.monitor_directory(
      Gio.FileMonitorFlags.NONE,
      null
    );

    // Connect to the changed signal
    appsMonitor.connect('changed', (monitor, file, otherFile, eventType) => {
      // Only refresh when files are created, deleted or changed
      if (
        eventType === Gio.FileMonitorEvent.CREATED ||
        eventType === Gio.FileMonitorEvent.DELETED ||
        eventType === Gio.FileMonitorEvent.CHANGED
      ) {
        console.log(`Applications directory changed: ${eventType}, refreshing apps list`);

        // Force apps object to refresh its internal list
        apps.reload();
      }
    });

    console.log('Successfully set up monitoring for /usr/share/applications');
  } catch (error) {
    console.error("监控目录失败:", error);
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
    <overlay cssClasses={["entry-overlay"]} heightRequest={70}>
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
    <PopupWindow name={WINDOW_NAME} anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT}>
      <box
        cssClasses={["applauncher-container"]}
        vertical
        vexpand={false}
        setup={(self) => {
          // Add cleanup for the monitor when the window is destroyed
          self.connect('destroy', () => {
            if (appsMonitor) {
              appsMonitor.cancel();
              appsMonitor = null;
              console.log('Apps directory monitor cancelled');
            }
          });
        }}
      >
        <SearchEntry />
        <AppsScrolledWindow />
      </box>
    </PopupWindow>
  );
}

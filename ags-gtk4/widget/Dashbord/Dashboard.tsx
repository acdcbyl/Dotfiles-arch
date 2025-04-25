import { Astal, App, Gtk, Gdk } from "astal/gtk4";
import PopupWindow from "../../common/PopupWindow";
import { Variable } from "astal";

export const WINDOW_NAME = "dashboard";

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

function Dashboard(_gdkmonitor: Gdk.Monitor) {
  return (
    <PopupWindow
      name={WINDOW_NAME}

      // layer={Astal.Layer.BOTTOM}
      //     animation="slide top"
      //   layout={layout.get()}
      anchor={Astal.WindowAnchor.TOP}
      // margin={25}
      onDestroy={() => layout.drop()}
    >
      <box cssClasses={["datemenu-container"]}>
        <Gtk.Calendar />
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

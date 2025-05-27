import { Astal, Gtk, Gdk } from "astal/gtk4";
import Powermenu from "../../lib/powermenu";
import PopupWindow from "../../common/PopupWindow";
import { FlowBox } from "../../common/FlowBox";

const powermenu = Powermenu.get_default();
export const WINDOW_NAME = "powermenu";

const icons = {
  sleep: "weather-clear-night-symbolic",
  reboot: "system-reboot-symbolic",
  logout: "system-log-out-symbolic",
  shutdown: "system-shutdown-symbolic",
  lockscreen: "system-lock-screen-symbolic",
};

function SysButton({ action, label }: { action: string; label: string }) {
  return (
    <button
      cssClasses={["system-button"]}
      onClicked={() => powermenu.action(action)}
    >
      <box vertical spacing={12} halign={Gtk.Align.CENTER} valign={Gtk.Align.CENTER}>
        <image iconName={icons[action]} cssClasses={["system-font"]} iconSize={Gtk.IconSize.LARGE} valign={Gtk.Align.CENTER} halign={Gtk.Align.CENTER} />
        {/* <label label={label} /> */}
      </box>
    </button>
  );
}

export default function PowerMenu(_gdkmonitor: Gdk.Monitor) {
  return (
    <PopupWindow
      name={WINDOW_NAME}
      exclusivity={Astal.Exclusivity.IGNORE}
    >
      <box>
        <FlowBox
          cssClasses={["powermenu-container"]}
          hexpand
          rowSpacing={6}
          columnSpacing={6}
          maxChildrenPerLine={4}
          setup={(self) => {
            self.connect("child-activated", (_, child) => {
              child.get_child()?.activate();
            });
          }}
          homogeneous
        >
          <SysButton action={"sleep"} label={"Sleep"} />
          <SysButton action={"logout"} label={"Log Out"} />
          <SysButton action={"reboot"} label={"Reboot"} />
          <SysButton action={"shutdown"} label={"Shutdown"} />
        </FlowBox>
      </box>
    </PopupWindow>
  );
}

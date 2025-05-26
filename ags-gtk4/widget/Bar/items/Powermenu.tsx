import PanelButton from "../PanelButton";
import { App, Gtk } from "astal/gtk4";
import { WINDOW_NAME } from "../../Powermenu/PowerMenu";

export default function PowermenuButton() {
  return (
    <PanelButton
      cssClasses={["powermenus-bg"]}
      window={WINDOW_NAME}
      onClicked={() => App.toggle_window(WINDOW_NAME)}
    >
      <box
        halign={Gtk.Align.CENTER}
        valign={Gtk.Align.CENTER}
        vexpand={false}
        hexpand={false}
      >
        <image iconName={"system-shutdown-symbolic"} iconSize={Gtk.IconSize.NORMAL} />
      </box>
    </PanelButton>
  );
}

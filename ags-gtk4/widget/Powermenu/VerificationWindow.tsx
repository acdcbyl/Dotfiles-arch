import Powermenu from "../../lib/powermenu";
import PopupWindow from "../../common/PopupWindow";
import { App, Astal, Gtk, Gdk, hook } from "astal/gtk4";
import { exec, bind } from "astal";

const WINDOW_NAME = "verification";

export default function VerificationWindow(_gdkmonitor: Gdk.Monitor) {
  const powermenu = Powermenu.get_default();

  return (
    <PopupWindow
      name={WINDOW_NAME}
      // layer={Astal.Layer.BOTTOM}
      exclusivity={Astal.Exclusivity.IGNORE}
    >
      <box
        cssClasses={["verification-container"]}
        vertical
        spacing={6}
      >
        <label halign={Gtk.Align.START} label={"Are you sure?"} cssClasses={["body"]} />
        <label
          label={bind(powermenu, "title").as(String)}
          halign={Gtk.Align.START}
          cssClasses={["title"]}
        />
        <box cssClasses={["buttons"]} homogeneous spacing={6} halign={Gtk.Align.END}>
          <button
            label={"No"}
            onClicked={() => App.toggle_window(WINDOW_NAME)}
            setup={(self) => {
              hook(self, App, "window-toggled", (_, win) => {
                if (win.name === WINDOW_NAME && win.visible) self.grab_focus();
              });
            }}
          />
          <button
            label={"Yes"}
            onClicked={() => {
              exec(powermenu.cmd);
              App.toggle_window(WINDOW_NAME);
            }}
          />
        </box>
      </box>
    </PopupWindow>
  );
}

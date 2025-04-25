import { bind } from "astal";
import { Gtk } from "astal/gtk4";
import BarItem from "../BarItem";
import AstalTray from "gi://AstalTray?version=0.1";

export default function TrayButton() {
  const tray = AstalTray.get_default();
  return (
    <BarItem cssName="bar_tray">
      <box spacing={8} hexpand={false} valign={Gtk.Align.CENTER}>
        {bind(tray, "items").as((items) =>
          items.map((item) => (
            <menubutton
              cssName="bar__tray-item"
              setup={(self) => {
                self.insert_action_group("dbusmenu", item.actionGroup);
              }}
              tooltipText={bind(item, "tooltipMarkup")}
            >
              <image gicon={bind(item, "gicon")} />
              {Gtk.PopoverMenu.new_from_model(item.menuModel)}
            </menubutton>
          )),
        )}
      </box></BarItem>
  );
}

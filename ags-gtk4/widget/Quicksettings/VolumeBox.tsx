import { bind } from "astal";
import { Gtk } from "astal/gtk4";
import AstalWp from "gi://AstalWp";
import { qsPage } from "./QSWindow";

export default function VolumeBox() {
  const speaker = AstalWp.get_default()?.audio!.defaultSpeaker!;

  return (
    <box
      cssClasses={["qs-box", "volume-box"]}
      valign={Gtk.Align.CENTER}
      spacing={10}
    >
      <image iconName={bind(speaker, "volumeIcon")} valign={Gtk.Align.CENTER} />
      <slider
        onChangeValue={(self) => {
          speaker.volume = self.value;
        }}
        value={bind(speaker, "volume")}
        hexpand
      />
      <button
        iconName={"go-next-symbolic"}
        onClicked={() => qsPage.set("speaker")}
      />
    </box>
  );
}

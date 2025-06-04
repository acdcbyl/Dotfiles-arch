import AstalWp from "gi://AstalWp?version=0.1";
import { qsPage } from "../QSWindow";
import { Gtk } from "astal/gtk4";
import { bind } from "astal";
import Pango from "gi://Pango";

export default function SpeakerPage() {
  const audio = AstalWp.get_default()!.audio;
  return (
    <box
      name={"speaker"}
      cssClasses={["speaker-page", "qs-page"]}
      vertical
      spacing={6}
    >
      <box hexpand={false} cssClasses={["header"]} spacing={6}>
        <button
          onClicked={() => {
            qsPage.set("main");
          }}
          iconName={"go-previous-symbolic"}
        />
        {/* <label label={"Speaker"} hexpand xalign={0} /> */}
        <label
          useMarkup={true}
          label={"<b> Speaker</b>"}
          hexpand
          xalign={0}
        />
        {/* <image */}
        {/*   iconName={"audio-speakers-symbolic"} */}
        {/*   hexpand */}
        {/*   halign={Gtk.Align.END} */}
        {/* /> */}
      </box>
      <Gtk.Separator />
      {bind(audio, "speakers").as((d) =>
        d.map((speaker) => (
          <button
            cssClasses={bind(speaker, "isDefault").as((isD) => {
              const classes = ["button"];
              isD && classes.push("active");
              return classes;
            })}
            onClicked={() => {
              speaker.set_is_default(true);
              qsPage.set("main");
            }}
          >
            <box>
              <image iconName={speaker.volumeIcon} />
              <label label={speaker.description} ellipsize={Pango.EllipsizeMode.END} maxWidthChars={30} />
            </box>
          </button>
        )),
      )}
    </box>
  );
}

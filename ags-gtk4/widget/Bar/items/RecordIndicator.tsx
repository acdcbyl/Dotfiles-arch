import { bind } from "astal";
import ScreenRecord from "../../../lib/screenrecord";
import PanelButton from "../PanelButton";
import { Gtk } from "astal/gtk4";

export default function RecordIndicatorPanelButton() {
  const screenRecord = ScreenRecord.get_default();
  return (
    <box visible={bind(screenRecord, "recording")}>
      <Gtk.Separator orientation={Gtk.Orientation.VERTICAL} />
      <PanelButton onClicked={() => screenRecord.stop().catch(() => "")}>
        <box>
          <image iconName={"media-record-symbolic"} />
          <label
            cssClasses={["timer"]}
            label={bind(screenRecord, "timer").as((time) => {
              const sec = time % 60;
              const min = Math.floor(time / 60);
              return `${min}:${sec < 10 ? "0" + sec : sec}`;
            })}
          />
        </box>
      </PanelButton>
    </box>
  );
}

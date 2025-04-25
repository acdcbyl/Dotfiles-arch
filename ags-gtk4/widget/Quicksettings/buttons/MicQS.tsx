import AstalWp from "gi://AstalWp";
import QSButton from "../QSButton";
import { bind } from "astal";

export default function MicQS() {
  const wireplumber = AstalWp.get_default()!;
  return (
    <QSButton
      connection={[wireplumber.defaultMicrophone, "mute", (v) => !v]}
      iconName={bind(wireplumber.defaultMicrophone, "mute").as((mute) =>
        mute
          ? "microphone-disabled-symbolic"
          : "microphone-sensitivity-high-symbolic",
      )}
      label={"Mic Access"}
      onClicked={() => {
        const mute = wireplumber.default_microphone.mute;
        wireplumber.default_microphone.set_mute(!mute);
      }}
    />
  );
}

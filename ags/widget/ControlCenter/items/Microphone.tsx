import { bind } from "astal";
import ControlCenterButton from "../ControlCenterButton";
import AstalWp from "gi://AstalWp?version=0.1";
import icons from "../../../lib/icons";

export default () => {
	const mic = AstalWp.get_default()?.audio.defaultMicrophone!;

	return (
		<ControlCenterButton
			label={bind(mic, "mute").as((muted) =>
				muted ? "Muted" : "Unmuted",
			)}
			icon={bind(mic, "mute").as(
				(muted) => icons.audio.mic[muted ? "muted" : "high"],
			)}
			connection={[bind(mic, "mute"), () => !mic.mute]}
			onPrimaryClick={() => (mic.mute = !mic.mute)}
		/>
	);
};

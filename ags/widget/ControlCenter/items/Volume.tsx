import AstalWp from "gi://AstalWp?version=0.1";
import { App, Gtk, Gdk, Widget } from "astal/gtk3";
import { bind, execAsync, Variable } from "astal";
import icons from "../../../lib/icons";

export default () => {
	const speaker = AstalWp.get_default()?.audio.defaultSpeaker!;

	return (
		<box
			className={bind(speaker, "mute").as((mute) =>
				mute ? "muted" : "",
			)}
		>
			<overlay
				className={"control-center__volume-slider"}
				child={
					<slider
						draw_value={false}
						hexpand={true}
						onDragged={({ value }) => {
							speaker.volume = value;
							speaker.mute = false;
						}}
						value={bind(speaker, "volume")}
					/>
				}
				overlay={
					<icon
						className={"control-center__slider-icon"}
						icon={bind(speaker, "volumeIcon")}
						hexpand={false}
						halign={Gtk.Align.START}
					/>
				}
			/>
		</box>
	);
};

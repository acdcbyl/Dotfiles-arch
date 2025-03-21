import { App, Gtk, Gdk, Widget } from "astal/gtk3";
import { bind, execAsync, timeout, Variable } from "astal";
import PopupMenu from "../PopupMenu";
import AstalWp from "gi://AstalWp?version=0.1";
import icons from "../../../lib/icons";

export default () => {
	const audio = AstalWp.get_default()?.audio!;

	const MixerItem = (stream: AstalWp.Endpoint) => {
		return new Widget.Box({
			hexpand: true,
			className: "popup-menu__item mixer__item",
			spacing: 16,
			children: [
				new Widget.Icon({
					className: "mixer__tooltip",
					tooltipText: bind(stream, "name").as((name) => name || ""),
					pixelSize: 32,
					icon: bind(stream, "icon").as(
						(icon) => icon || icons.fallback.audio,
					),
				}),
				new Widget.Box({
					vertical: true,
					children: [
						new Widget.Label({
							xalign: 0,
							truncate: true,
							label: bind(stream, "name").as(
								(name) => name || "",
							),
						}),
						new Widget.Slider({
							className: "mixer__slider",
							hexpand: true,
							drawValue: false,
							value: bind(stream, "volume"),
							onDragged: ({ value }) => (stream.volume = value),
						}),
					],
				}),
				new Widget.Label({
					className: "mixer__value",
					// xalign: 0.5,
					label: bind(stream, "volume").as(
						(v) => `${Math.floor(v * 100)}%`,
					),
					// label: stream
					// 	.bind("volume")
					// 	.transform((v) => `${Math.floor(v * 100)}%`),
				}),
			],
		});
	};

	const Placeholder = () => (
		<box
			name="placeholder"
			className="mixer-placeholder"
			spacing={16}
			vexpand
			valign={Gtk.Align.CENTER}
			halign={Gtk.Align.CENTER}
		>
			<label label="No audio streams available" />
		</box>
	);

	return (
		<PopupMenu label="Mixer">
			{bind(audio, "streams").as((streams) => (
				<stack
					transitionType={Gtk.StackTransitionType.CROSSFADE}
					transitionDuration={500}
					shown={streams.length > 0 ? "streams" : "placeholder"}
				>
					<box vertical name={"streams"}>
						{streams.map(MixerItem)}
					</box>
					<Placeholder />
				</stack>
			))}
		</PopupMenu>
	);
};

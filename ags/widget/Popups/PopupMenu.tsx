import { App, Astal } from "astal/gtk3";
import PopupWindow from "../../common/PopupWindow";

type PopupMenuProps = {
	label: string;
	child?: JSX.Element;
};

export default ({ label, child }: PopupMenuProps) => {
	const name = `popup-${label.toLowerCase()}`;

	return (
		<PopupWindow
			layer={Astal.Layer.TOP}
			keymode={Astal.Keymode.EXCLUSIVE}
			application={App}
			scrimType="opaque"
			className={"PopupMenu"}
			name={name}
			namespace={"popup-window"}
			visible={false}
			onKeyPressEvent={(self, event) => {
				const [keyEvent, keyCode] = event.get_keycode();
				if (keyEvent && keyCode == 9) {
					App.toggle_window(self.name);
				}
			}}
		>
			<box
				className={`popup-menu ${label.toLowerCase()}`}
				spacing={12}
				vertical
			>
				<box className="popup-menu__header">
					<label label={label} />
				</box>
				<scrollable className="popup-menu__content" vexpand={true}>
					{child}
				</scrollable>
			</box>
		</PopupWindow>
	);

	// return new Widget.Window({
	// 	name,
	// 	layer: "overlay",
	// 	keymode: "exclusive",
	// 	visible: false,
	// 	// on_key_pressed(self, key, _controller) {
	// 	// 	if (key.code == 9 && self.name) {
	// 	// 		App.toggleWindow(self.name);
	// 	// 	}
	// 	// },
	// 	child: Widget.Box({
	// 		classNames: ["popup-menu", label.toLowerCase()],
	// 		vertical: true,
	// 		children: [
	// 			Widget.Box({
	// 				classNames: ["popup-menu__header"],
	// 				spacing: 12,
	// 				children: [
	// 					Widget.Label({
	// 						label: label,
	// 					}),
	// 				],
	// 			}),
	// 			Widget.Scrollable({
	// 				vexpand: true,
	// 				classNames: ["popup-menu__content"],
	// 				child: content,
	// 				setup: (self) => {
	// 					self.hook(
	// 						App,
	// 						(_, windowName, visible) => {
	// 							if (windowName == name && visible)
	// 								self.grab_focus();
	// 						},
	// 						"window-toggled",
	// 					);
	// 				},
	// 			}),
	// 		],
	// 	}),
	// 	setup: (self) => {
	// 		self.keybind("Escape", () => App.closeWindow(self.name));
	// 		self.hook(
	// 			App,
	// 			(_, windowName, visible) => {
	// 				if (windowName == self.name && visible) {
	// 					const windows = App.windows.filter(
	// 						(window) =>
	// 							(window.name?.includes("popup") ||
	// 								window.name?.includes("powermenu")) &&
	// 							window.visible &&
	// 							window.name != self.name,
	// 					);
	// 					windows.forEach((window) => {
	// 						window.visible = false;
	// 					});
	// 				}
	// 			},
	// 			"window-toggled",
	// 		);
	// 	},
	// });
};

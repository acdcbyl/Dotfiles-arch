import { App, Gtk, Widget, astalify, ConstructProps } from "astal/gtk3";
import { bind, execAsync, GObject, Variable } from "astal";
import { spacing, uptime } from "../../../lib/variables";
import NetworkButton from "../items/Network";
import Volume from "../items/Volume";
import DND from "../items/DND";
import Microphone from "../items/Microphone";
import icons from "../../../lib/icons";
import Brightness from "../items/Brightness";
import Profile from "../items/Profile";
// import FanProfileButton from "../items/FanProfile";
import ScreenRecord from "../items/ScreenRecord";
import ColorScheme from "../items/ColorScheme";
import ScreenRecordMenu from "../items/ScreenRecordMenu";
import ScreenRecordService from "../../../service/ScreenRecord";
import BluetoothButton from "../items/Bluetooth";
import { toggleWindow } from "../../../lib/utils";
// import Profile from "../items/Profile";

class FlowBox extends astalify(Gtk.FlowBox) {
	static {
		GObject.registerClass(this);
	}

	constructor(
		props: ConstructProps<Gtk.FlowBox, Gtk.FlowBox.ConstructorProps>,
	) {
		super(props as any);
	}
}

export default () => {
	const revealScreenRecord = Variable(false);

	const fb = new FlowBox({
		homogeneous: true,
		selectionMode: Gtk.SelectionMode.NONE,
		maxChildrenPerLine: 2,
		minChildrenPerLine: 2,
		rowSpacing: spacing,
		columnSpacing: spacing,
	});

	// const FanProfile = FanProfileButton();
	const Network = NetworkButton();
	const Bluetooth = BluetoothButton();

	if (Network != undefined) {
		fb.add(Network);
	}
	if (Bluetooth != undefined) {
		fb.add(Bluetooth);
	}
	// if (FanProfile != undefined) {
	// 	fb.add(FanProfile);
	// }
	fb.add(Microphone());
	fb.add(DND());
	fb.add(Profile());
	fb.add(
		new Widget.Box({
			spacing,
			homogeneous: true,
			children: [
				ColorScheme(),
				ScreenRecord({
					onClicked: () => {
						if (ScreenRecordService.recording) {
							ScreenRecordService.stop();
						} else {
							revealScreenRecord.set(!revealScreenRecord.get());
						}
					},
				}),
			],
		}),
	);

	return (
		<box
			name="main"
			className="control-center__page main"
			vertical
			spacing={spacing}
		>
			{fb}
			<ScreenRecordMenu
				revealMenu={bind(revealScreenRecord)}
				closeMenu={() =>
					revealScreenRecord.set(!revealScreenRecord.get())
				}
			/>
			<Volume />
			{Brightness()}
			<box spacing={16} className="control-center__footer">
				<button
					className="control-center__powermenu-button"
					onClick={() => toggleWindow("powermenu")}
				>
					<icon icon={icons.powermenu.shutdown} iconSize={16} />
				</button>
				<box hexpand />
				<label
					className="control-center__time-to-empty"
					label={bind(uptime)}
				/>
				<button
					className="control-center__settings-button"
					onClick={() => {
						execAsync("pavucontrol");
					}}
				>
					<icon icon={icons.ui.settings} iconSize={16} />
				</button>
			</box>
		</box>
	);
};

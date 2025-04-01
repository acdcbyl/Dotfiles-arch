import { App, Gtk, Widget, astalify, ConstructProps } from "astal/gtk3";
import { bash } from "../../../lib/utils";
import { bind, execAsync, GObject, Variable } from "astal";
import { spacing, uptime } from "../../../lib/variables";
import NetworkButton from "../items/Network";
import Volume from "../items/Volume";
import DND from "../items/DND";
import Microphone from "../items/Microphone";
import icons from "../../../lib/icons";
import Brightness from "../items/Brightness";
import ScreenRecord from "../items/ScreenRecord";
import ScreenRecordMenu from "../items/ScreenRecordMenu";
import ScreenRecordService from "../../../service/ScreenRecord";
import BluetoothButton from "../items/Bluetooth";
import { toggleWindow } from "../../../lib/utils";
import { username } from "../../../service/Profile";
import Binding from "astal/binding";
import Profile from "../items/Profile";
import Hyprpicker from "../items/Hyprpicker";
import Screenshot from "../items/Screenshot";
import ScreenshotMenu from "../items/ScreenshotMenu";
import Wallpaper from "../items/Wallpaper";

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
	const revealScreenshot = Variable(false);

	const user = bind(username) as Binding<string | undefined>;
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
	fb.add(Microphone());
	fb.add(DND());
	// fb.add(Profile());
	// fb.add(PowerProfile());
	fb.add(
		new Widget.Box({
			spacing,
			homogeneous: true,
			children: [
				Screenshot({
					onClicked: () => {
						revealScreenshot.set(!revealScreenshot.get());
					},
				}),
				Hyprpicker(),
			],
		}),
	);
	fb.add(
		new Widget.Box({
			spacing,
			homogeneous: true,
			children: [
				Wallpaper(),
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
			<ScreenshotMenu
				revealMenu={bind(revealScreenshot)}
				closeMenu={() => revealScreenshot.set(false)}
			/>
			<ScreenRecordMenu
				revealMenu={bind(revealScreenRecord)}
				closeMenu={() =>
					revealScreenRecord.set(!revealScreenRecord.get())
				}
			/>
			<Volume />
			{Brightness()}
			<box spacing={16} className="control-center__footer">
				<box className="control-center__user-profile" spacing={8}>
					<box
						className="notification__icon"
						css={`
                            background-image: url("file:///home/aiser/.config/ags/Avatar/icon.png");
                            background-size: cover;
                            background-position: center;
                            min-width: 40px;
                            min-height: 40px;
                            border-radius: 50%;
                        `}
					/>
					<label
						className="control-center__username"
						label={user || ''}
					/>
				</box>
				<box hexpand />
				<button
					valign={Gtk.Align.END}
					className="control-center__powermenu-button"
					onClick={() => toggleWindow("powermenu")}
				>
					<icon icon={icons.powermenu.shutdown} iconSize={16} />
				</button>
				{/* <box hexpand /> */}
				{/* <label */}
				{/* 	className="control-center__time-to-empty" */}
				{/* 	label={bind(uptime)} */}
				{/* /> */}
				<button
					valign={Gtk.Align.END}
					className="control-center__settings-button"
					onClick={() => {
						// execAsync("pavucontrol");
						bash(`pavucontrol & astal -t control-center`);
					}}
				>
					<icon icon={icons.ui.settings} iconSize={16} />
				</button>
			</box>
		</box>
	);
};

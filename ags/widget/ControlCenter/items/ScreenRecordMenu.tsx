import { Gtk } from "astal/gtk3";
import { Binding, Variable, bind, exec, execAsync, timeout } from "astal";
import icons from "../../../lib/icons";
import { spacing } from "../../../lib/variables";
import Button from "../../../common/Button";
import GLib from "gi://GLib?version=2.0";
import ScreenRecordService from "../../../service/ScreenRecord";

const recordMicrophone = Variable(false);
const recordInternalAudio = Variable(false);

export default ({
	revealMenu,
	closeMenu,
}: {
	revealMenu: Binding<boolean>;
	closeMenu: () => void;
}) => {
	return (
		<box
			vertical
			className={"control-center__dropdown-menu"}
			spacing={spacing * 2}
			visible={revealMenu}
		>
			<icon
				icon={icons.record}
				className={"control-center__dropdown-menu_icon"}
			/>
			<label
				label={"Start recording?"}
				className={"control-center__dropdown-menu_title"}
			/>
			<box
				hexpand
				className={"control-center__dropdown-menu_item"}
				spacing={spacing * 2}
			>
				<icon icon={icons.audio.mic.high} />
				<label label={"Record audio"} />
				<switch hexpand halign={Gtk.Align.END} />
			</box>
			<box
				hexpand
				className={"control-center__dropdown-menu_item"}
				spacing={spacing * 2}
			>
				<icon icon={icons.audio.type.speaker} />
				<label label={"Record internal audio"} />
				<switch hexpand halign={Gtk.Align.END} />
			</box>
			<box hexpand halign={Gtk.Align.END} spacing={spacing}>
				<Button buttonType="outlined" onClicked={closeMenu}>
					Cancel
				</Button>
				<Button
					onClicked={() => {
						ScreenRecordService.start();
						closeMenu();
					}}
				>
					Start
				</Button>
			</box>
		</box>
	);
};

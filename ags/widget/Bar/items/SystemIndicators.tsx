import Wp from "gi://AstalWp";
import Network from "gi://AstalNetwork";
import Bluetooth from "gi://AstalBluetooth";
import BarButton from "../BarButton";
import { App } from "astal/gtk3";
import { bind, Variable } from "astal";
import icons from "../../../lib/icons";
import AstalNotifd from "gi://AstalNotifd?version=0.1";
import { toggleWindow } from "../../../lib/utils";

const BluetoothIndicator = () => {
	const bluetooth = Bluetooth.get_default();
	return (
		<icon
			visible={bind(bluetooth, "isPowered").as((isPowered) => isPowered)}
			icon={bind(bluetooth, "isPowered").as((isPowered) =>
				isPowered ? icons.bluetooth.enabled : icons.bluetooth.disabled,
			)}
		/>
	);
};

const DNDIndicator = () => {
	const notifd = AstalNotifd.get_default();
	return (
		<icon
			visible={bind(notifd, "dontDisturb").as((dnd) => dnd)}
			icon={bind(notifd, "dontDisturb").as(
				(dnd) => icons.notifications[dnd ? "silent" : "noisy"],
			)}
		/>
	);
};

const MicMuteIndicator = () => {
	const mic = Wp.get_default()?.audio.defaultMicrophone!;
	return (
		<icon
			visible={bind(mic, "mute").as((muted) => muted)}
			icon={bind(mic, "mute").as(
				(muted) => icons.audio.mic[muted ? "muted" : "high"],
			)}
		/>
	);
};

const NetworkIndicator = () => {
	const network = Network.get_default();

	if (network == null) {
		return;
	}
	if (network.wifi == null) {
		return <icon icon={bind(network.wired, "iconName")} />;
	} else if (network.wired == null) {
		return <icon icon={bind(network.wifi, "iconName")} />;
	}

	const primary = bind(network, "primary");
	const wifiIcon = bind(network.wifi, "iconName");
	const wiredIcon = bind(network.wired, "iconName");

	const icon = Variable.derive(
		[primary, wifiIcon, wiredIcon],
		(primary, iconWifi, iconWired) => {
			if (primary == Network.Primary.WIFI) {
				return iconWifi;
			} else {
				return iconWired;
			}
		},
	);

	return (
		<icon
			tooltipText={bind(network.wifi, "ssid").as(String)}
			icon={bind(icon)}
		/>
	);
};

const AudioIndicator = () => {
	const speaker = Wp.get_default()?.audio.defaultSpeaker!;

	return (
		<icon
			tooltipText={bind(speaker, "volume").as(
				(v) => Math.round(v * 100).toString() + "%",
			)}
			icon={bind(speaker, "volumeIcon")}
		/>
	);
};

export default () => {
	return (
		<BarButton
			className="bar__system-indicators"
			onClicked={() => toggleWindow("control-center")}
			setup={(self) => {
				const controlCenterWindow = App.get_window("control-center");
				if (controlCenterWindow) {
					self.hook(controlCenterWindow, "notify::visible", () => {
						self.toggleClassName(
							"active",
							controlCenterWindow.visible,
						);
					});
				}
			}}
		>
			<box spacing={10}>
				<NetworkIndicator />
				<BluetoothIndicator />
				<DNDIndicator />
				<MicMuteIndicator />
				<AudioIndicator />
			</box>
		</BarButton>
	);
};

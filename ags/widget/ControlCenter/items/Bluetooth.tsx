import { bind } from "astal";
import ControlCenterButton from "../ControlCenterButton";
import Bluetooth from "gi://AstalBluetooth?version=0.1";
import icons from "../../../lib/icons";

export default () => {
	const bluetooth = Bluetooth.get_default();

	if (bluetooth)
		return (
			<ControlCenterButton
				name="bluetooth"
				label={bind(bluetooth, "isConnected").as((isConnected) => {
					if (isConnected) {
						const devices = bluetooth.get_devices();
						const connectedDevices = devices.filter(
							(device) => device.connected,
						);
						if (connectedDevices[0]) {
							return connectedDevices[0].name;
						} else {
							return "Bluetooth";
						}
					} else {
						return "Bluetooth";
					}
				})}
				icon={bind(bluetooth, "isPowered").as(
					(p) => icons.bluetooth[p ? "enabled" : "disabled"],
				)}
				connection={[
					bind(bluetooth, "isPowered"),
					() => bluetooth.isPowered,
				]}
				onPrimaryClick={() => bluetooth.toggle()}
				menuName={"bluetooth"}
			/>
		);
};

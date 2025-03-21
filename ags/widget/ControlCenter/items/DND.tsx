import { bind } from "astal";
import ControlCenterButton from "../ControlCenterButton";
import AstalNotifd from "gi://AstalNotifd?version=0.1";
import icons from "../../../lib/icons";

export default () => {
	const notifications = AstalNotifd.get_default();
	return (
		<ControlCenterButton
			name="bluetooth"
			label="Do not disturb"
			icon={bind(notifications, "dontDisturb").as(
				(dnd) => icons.notifications[dnd ? "silent" : "noisy"],
			)}
			connection={[
				bind(notifications, "dontDisturb"),
				() => notifications.dontDisturb,
			]}
			onPrimaryClick={() =>
				(notifications.dontDisturb = !notifications.dontDisturb)
			}
		/>
	);
};

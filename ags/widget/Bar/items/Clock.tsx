import { GLib, Variable, execAsync } from "astal";
import BarButton from "../BarButton";
import { toggleWindow } from "../../../lib/utils";

export default () => {
	const format = "%a %d %b, %H:%M";
	const time = Variable<string>("").poll(
		1000,
		() => GLib.DateTime.new_now_local().format(format)!,
	);
	return (
		<BarButton
			onClicked={() => {
				toggleWindow("dashboard");
				// execAsync("gnome-calendar");
			}}
		>
			<label
				className="Time"
				onDestroy={() => time.drop()}
				label={time()}
			/>
		</BarButton>
	);
};

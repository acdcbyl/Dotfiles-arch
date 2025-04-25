import { GLib, Variable, execAsync } from "astal";
import { App } from "astal/gtk4"
import BarButton from "../BarButton";

export default () => {
	const format = "%a %d %b, %H:%M";
	const time = Variable<string>("").poll(
		1000,
		() => GLib.DateTime.new_now_local().format(format)!,
	);
	return (
		<BarButton
			onClicked={() => App.toggle_window("dashboard")}
		>
			<label
				cssClasses={["Time"]}
				onDestroy={() => time.drop()}
				label={time()}
			/>
		</BarButton>
	);
};

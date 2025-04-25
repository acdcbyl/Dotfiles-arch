import { bind } from "astal";
import { Gio } from "astal";
import Battery from "gi://AstalBattery";
import BarItem, { BarItemStyle } from "../BarItem";

export default () => {
	const bat = Battery.get_default();

	return (
		<BarItem
			cssName="bar__battery"
			itemStyle={BarItemStyle.primaryContainer}
			visible={bind(bat, "isPresent")}
		>
			<box spacing={4}>
				<image gicon={bind(bat, "battery_icon_name").as(
					(iconName) => Gio.ThemedIcon.new(iconName)
				)} />
				<label
					label={bind(bat, "percentage").as(
						(p) => `${Math.floor(p * 100)} %`,
					)}
				/>
			</box>
		</BarItem>
	);
};

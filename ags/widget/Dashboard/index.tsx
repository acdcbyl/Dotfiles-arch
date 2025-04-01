import { App, Astal } from "astal/gtk3";
import PopupWindow from "../../common/PopupWindow";
import { CalendarWidget } from "./items/CalendarWidget";
import { TimeWidget } from "./items/Time"
import { WeatherWidget } from "./items/Weather/"
export default () => {
	return (
		<PopupWindow
			name={"dashboard"}
			namespace="dashboard"
			scrimType="transparent"
			anchor={Astal.WindowAnchor.TOP}
			marginTop={12}
			layer={Astal.Layer.TOP}
			exclusivity={Astal.Exclusivity.NORMAL}
			keymode={Astal.Keymode.EXCLUSIVE}
			onKeyPressEvent={(self, event) => {
				const [keyEvent, keyCode] = event.get_keycode();
				if (keyEvent && keyCode == 9) {
					App.toggle_window(self.name);
				}
			}}
		>
			<box className={"dashboard"} vertical spacing={10}>
				{/* {systemStats()} */}
				{/* <Calendar /> */}
				{/* <TimeWidget /> */}
				<CalendarWidget />
				<WeatherWidget />
			</box>
		</PopupWindow>
	);
};

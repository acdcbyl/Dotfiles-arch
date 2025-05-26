import PanelButton from "../PanelButton";
import { WINDOW_NAME } from "../../AppLauncher/Applauncher";
import { App } from "astal/gtk4";

export default function LauncherPanelButton() {
	return (
		<PanelButton
			cssClasses={["applauncher-bg"]}
			window={WINDOW_NAME}
			onClicked={() => App.toggle_window(WINDOW_NAME)}
		>
			<box>
				<image iconName={"file-search-symbolic"} />
				<label label={"Applications"} />
			</box>

		</PanelButton>
	);
}

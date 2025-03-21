import { App, Gtk, Widget } from "astal/gtk3";
import BarButton from "../BarButton";
import { toggleWindow } from "../../../lib/utils";

export default () => (
	<BarButton
		className="bar__app-launcher"
		onClicked={() => {
			toggleWindow("app-launcher");
		}}
		setup={(self) => {
			const applauncherWindow = App.get_window("app-launcher");
			if (applauncherWindow) {
				self.hook(applauncherWindow, "notify::visible", () => {
					self.toggleClassName("active", applauncherWindow.visible);
				});
			}
		}}
	>
		<box
			// className="bar__app-launcher_icon"
			valign={Gtk.Align.CENTER}
			halign={Gtk.Align.CENTER}
			hexpand={true}
			vexpand={true}
		>
			<label
				label="󰣇"
				className="arch-icon"
				useMarkup={true}
			/>
		</box>
	</BarButton>
);

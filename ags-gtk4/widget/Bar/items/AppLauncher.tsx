import { App, Gtk, Widget } from "astal/gtk4";
import BarButton from "../BarButton";

export default () => (
	<BarButton
		cssName="bar__app-launcher"
		onClicked={() => App.toggle_window("app-launcher")}
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
				cssClasses={["arch-icon"]}
				useMarkup={true}
			/>
		</box>
	</BarButton>
);

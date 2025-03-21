import AstalAuth from "gi://AstalAuth";
import { App, Gdk, GLib, Gtk } from "astal";

export default () => (
	<box hexpand vexpand halign={Gtk.Align.CENTER} valign={Gtk.Align.CENTER}>
		<entry
			visibility={false}
			halign={Gtk.Align.CENTER}
			valign={Gtk.Align.CENTER}
			onActivate={(self) => {
				AstalAuth.Pam.authenticate(self.text, (_self, task) => {
					try {
						AstalAuth.Pam.authenticate_finish(task);
						App.quit();
					} catch (error) {
						print(error);
					}
				});
			}}
		/>
	</box>
);

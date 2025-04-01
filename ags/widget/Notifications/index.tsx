import { App, Gtk, Gdk, Widget, Astal } from "astal/gtk3";
import { bind, execAsync, timeout, Variable, GLib } from "astal";
import Notifd from "gi://AstalNotifd?version=0.1";
import Notification from "./Notification";
import { spacing } from "../../lib/variables";
import PopupWindow from "../../common/PopupWindow";
import { Subscribable } from "astal/binding";

class NotificationsMap implements Subscribable {
	private map: Map<number, Gtk.Widget> = new Map();
	private var: Variable<Array<Gtk.Widget>> = Variable([]);

	private notifiy() {
		this.var.set([...this.map.values()].reverse());
	}

	constructor() {
		const notifd = Notifd.get_default();
		notifd.set_ignore_timeout(true);

		notifd.connect("notified", (_, id) => {
			this.set(
				id,
				Notification({
					notification: notifd.get_notification(id)!,
					onHoverLost: () => { },
					setup: (self) => { },
				}),
			);
		});
		notifd.connect("resolved", (_, id) => {
			this.map.get(id)?.close(() => this.delete(id));
		});
	}

	private set(key: number, value: Gtk.Widget) {
		this.map.get(key)?.destroy();
		this.map.set(key, value);
		this.notifiy();
	}

	private delete(key: number) {
		this.map.get(key)?.destroy();
		this.map.delete(key);
		this.notifiy();
	}

	get() {
		return this.var.get();
	}

	subscribe(callback: (list: Array<Gtk.Widget>) => void) {
		return this.var.subscribe(callback);
	}
}
export default () => {
	const notifs = new NotificationsMap();
	const notifications = Notifd.get_default();
	notifications.get_notifications().forEach((n) => n.dismiss()); // This will remove all existing notifications on startup
	return (
		<PopupWindow
			scrimType="transparent"
			layer={Astal.Layer.OVERLAY}
			visible={false}
			margin={12}
			vexpand={true}
			keymode={Astal.Keymode.EXCLUSIVE}
			name="notifications"
			namespace="notifications"
			className="notifications"
			exclusivity={Astal.Exclusivity.NORMAL}
			anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.RIGHT}
			application={App}
			onKeyPressEvent={(self, event) => {
				const [keyEvent, keyCode] = event.get_keycode();
				if (keyEvent && keyCode == 9) {
					App.toggle_window(self.name);
				}
			}}
			setup={(self) => {
				self.hook(notifications, "notify::notifications", () => {
					if (notifications.get_notifications().length == 0) {
						timeout(500, () => {
							self.visible = false;
						});
					}
				});
			}}
		>
			<box vertical className="notifications-window" spacing={spacing}>
				<button
					halign={Gtk.Align.END}
					hexpand={false}
					className="notifications-window__clear"
					// tooltipText="Clear all notifications"
					onClicked={() => {
						notifications.get_notifications().forEach((n) => {
							timeout(150, () => n.dismiss());
						});
					}}
				>
					<box spacing={6}>
						<icon
							className="notifications-window__clear-icon"
							icon="edit-clear-all-symbolic"
							iconSize={16}
						/>
						<label
							className="notifications-window__clear-label"
							label="Clear"
						/>
					</box>
				</button>

				<scrollable vexpand>
					<box
						className="notifications-window__list"
						visible={true}
						orientation={Gtk.Orientation.VERTICAL}
						spacing={6}
						vexpand={true}
						hexpand={true}
						noImplicitDestroy
					>
						{bind(notifs)}
					</box>
				</scrollable>
			</box>
		</PopupWindow>
	);
};

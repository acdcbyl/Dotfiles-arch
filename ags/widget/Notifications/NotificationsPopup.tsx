import Notification from "./Notification";
import Notifd from "gi://AstalNotifd";
import { App, Gtk, Gdk, Widget, Astal } from "astal/gtk3";
import { Subscribable } from "astal/binding";
import { bind, timeout, Variable } from "astal";

const TIMEOUT_DELAY = 5000;

class PopupNotificationsMap implements Subscribable {
	private map: Map<number, Gtk.Widget> = new Map();
	private var: Variable<Array<Gtk.Widget>> = Variable([]);

	private notifiy() {
		this.var.set([...this.map.values()].reverse());
	}

	constructor() {
		const notifd = Notifd.get_default();

		notifd.connect("notified", (_, id) => {
			this.set(
				id,
				Notification({
					notification: notifd.get_notification(id)!,
					onHoverLost: () => this.map.get(id)?.close(() => this.delete(id)),
					setup: (self) => {
						timeout(TIMEOUT_DELAY, () => {
							this.map.get(id)?.close(() => this.delete(id));
						});
					},
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

export default (monitor: Gdk.Monitor) => {
	const notifs = new PopupNotificationsMap();

	return (
		<window
			layer={Astal.Layer.OVERLAY}
			marginTop={20}
			className="NotificationsPopup"
			namespace="notifications-popup"
			anchor={Astal.WindowAnchor.TOP}
			gdkmonitor={monitor}
		>
			<box className="notifications-popup" spacing={8} vertical={true} noImplicitDestroy>
				{bind(notifs)}
			</box>
		</window>
	);
};

import Tray from "gi://AstalTray";
import BarItem from "../BarItem";
import { bind } from "astal";
import { App, Gtk } from "astal/gtk3";

export default function SysTray() {
	const tray = Tray.get_default();

	return (
		<revealer
			visible={tray.get_items().length > 0}
			revealChild={tray.get_items().length > 0}
			transitionDuration={300}
			transitionType={Gtk.RevealerTransitionType.SLIDE_LEFT}
			setup={(self) => {
				self.hook(tray, "notify::items", () => {
					if (tray.get_items().length > 0) {
						self.visible = true;
						self.reveal_child = true;
					} else {
						self.reveal_child = false;
						setTimeout(() => {
							self.visible = false;
						}, 300);
					}
				});
			}}
		>
			<BarItem className="bar__tray">
				<box spacing={4} hexpand={false} valign={Gtk.Align.CENTER}>
					{bind(tray, "items").as(items => items.map(item => {
						if (item.iconThemePath) {
							App.add_icons(item.iconThemePath);
						}
						return (
							<menubutton
								className="bar__tray-item"
								tooltipMarkup={bind(item, "tooltipMarkup")}
								usePopover={false}
								actionGroup={bind(item, "action-group").as(ag => ["dbusmenu", ag])}
								menuModel={bind(item, "menu-model")}>
								<icon gIcon={bind(item, "gicon")} />
							</menubutton>
						);
					}))}
				</box>
			</BarItem>
		</revealer>
	);
}

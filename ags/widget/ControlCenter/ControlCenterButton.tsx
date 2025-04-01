import { Gtk, Widget, Astal } from "astal/gtk3";
import icons from "../../lib/icons";
import { Subscribable, bind, Binding } from "astal/binding";
import { controlCenterPage } from ".";
import Network from "gi://AstalNetwork?version=0.1";

type ControlCenterButtonProps = {
	icon: Widget.IconProps["icon"];
	label?: Widget.LabelProps["label"];
	onPrimaryClick?: () => void;
	menuName?: string;
	connection?: [Subscribable<unknown>, () => boolean];
	className?: Widget.ButtonProps["className"];
} & Widget.ButtonProps;

export default ({
	icon,
	label,
	menuName,
	onPrimaryClick,
	connection,
	className,
	...props
}: ControlCenterButtonProps) => {
	return (
		<button
			className={`${className} control-center__button ${!label && "no-label"}`}
			setup={(self) => {
				if (connection) {
					let [service, condition] = connection;
					self.toggleClassName("active", condition());
					self.hook(service, () => {
						self.toggleClassName("active", condition());
					});
				}
			}}
			onClickRelease={(_, event: Astal.ClickEvent) => {
				if (event.button == 1 && onPrimaryClick) {
					onPrimaryClick();
				}
				if (event.button == 3 && menuName) {
					if (menuName == "network") {
						const { wifi } = Network.get_default();
						if (wifi == null) return;
					}
					controlCenterPage.set(menuName);
				}
			}}
			{...props}
		>
			<box
				hexpand
				spacing={12}
				halign={label ? Gtk.Align.FILL : Gtk.Align.CENTER}
			>
				<icon
					icon={icon}
					halign={!label ? Gtk.Align.CENTER : Gtk.Align.START}
				/>
				{label && (
					<label
						label={label}
						halign={Gtk.Align.START}
						hexpand
						truncate
					/>
				)}
				{menuName && (
					<box hexpand={false} halign={Gtk.Align.END}>
						<icon
							halign={Gtk.Align.END}
							icon={icons.ui.arrow.right}
						/>
					</box>
				)}
			</box>
		</button>
	);
};

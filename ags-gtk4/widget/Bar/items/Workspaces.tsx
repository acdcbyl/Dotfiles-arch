import { bind } from "astal";
import { App, Gtk, Gdk } from "astal/gtk4";
import Hyprland from "gi://AstalHyprland";
import AstalHyprland from "gi://AstalHyprland";
import BarButton from "../BarButton";
import { range } from "../../../lib/utils";
import { Variable } from "astal";
import BarItem from "../BarItem";
import { ButtonProps } from "astal/gtk4/widget";
type WsButtonProps = ButtonProps & {
	ws: AstalHyprland.Workspace;
};

function WorkspaceButton({ ws, ...props }: WsButtonProps) {
	const hyprland = AstalHyprland.get_default();
	const classNames = Variable.derive(
		[bind(hyprland, "focusedWorkspace"), bind(hyprland, "clients")],
		(fws, _) => {
			const classes = ["bar__workspaces-indicator"];

			const active = fws.id == ws.id;
			active && classes.push("active");

			const occupied = hyprland.get_workspace(ws.id)?.get_clients().length > 0;
			occupied;
			return classes;
		},
	);

	return (
		<button
			cssClasses={classNames()}
			onDestroy={() => classNames.drop()}
			valign={Gtk.Align.CENTER}
			halign={Gtk.Align.CENTER}
			onClicked={() => ws.focus()}
			{...props}
		/>
	);
}
export default function WorkspacesPanelButton() {
	return (

		<BarItem>
			<box spacing={8}>
				{range(10).map((i) => (
					<WorkspaceButton ws={AstalHyprland.Workspace.dummy(i + 1, null)} />
				))}
			</box>
		</BarItem>
	);
}
